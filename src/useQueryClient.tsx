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
import config from "../config.json";

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

export const createTmClient = async () => {
  const rpcs = config.nodes.map((n) => n.rpc);
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
  useEffect(() => {
    createTmClient()
      .then(([tmClient, status]) => {
        setTmClient(tmClient);
        setStatus(status);
      })
      .catch((err) => {
        console.error(err);
        setStatus(null);
      });
  }, []);
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
