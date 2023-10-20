import {
  HttpBatchClient,
  StatusResponse,
  Tendermint37Client,
} from "@cosmjs/tendermint-rpc";
import { KujiraQueryClient, kujiraQueryClient } from "kujira.js";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { chains } from "../config";
import { useNetwork } from "./useNetwork";

const toClient = async (
  url: string
): Promise<[Tendermint37Client, StatusResponse]> => {
  try {
    const http = new HttpBatchClient(url, { batchSizeLimit: 100 });
    const tm = await Tendermint37Client.create(http);
    const status = await tm.status();
    return [tm, status];
  } catch (error) {
    throw error;
  }
};

export const createTmClient = async (network: string) => {
  if (!(network in chains))
    throw new Error(`No config available for ${network}`);
  const rpcs = chains[network].validators.map((n) => n.rpc_url);
  return Promise.any(rpcs.map(toClient));
};

export interface Context {
  queryClient?: KujiraQueryClient;
  tmClient?: Tendermint37Client;
  status?: StatusResponse | null;
}

const Context = createContext<Context>({});

export const QueryContext: FC<PropsWithChildren> = ({ children }) => {
  const [tmClient, setTmClient] = useState<Tendermint37Client>();
  const [status, setStatus] = useState<StatusResponse | null>();
  const { network } = useNetwork();
  useEffect(() => {
    createTmClient(network)
      .then(([tmClient, status]) => {
        setTmClient(tmClient);
        setStatus(status);
      })
      .catch((err) => {
        console.error(err);
        setStatus(null);
      });
  }, [network]);
  return (
    <Context.Provider
      value={{
        queryClient: tmClient && kujiraQueryClient({ client: tmClient }),
        status,
        tmClient,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useQueryClient = () => useContext(Context);
