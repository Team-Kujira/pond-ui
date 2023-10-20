import { MAINNET, TESTNET } from "kujira.js";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import config from "../../config.json";

const networks = Object.keys(config.chains);

export interface Context {
  networks: string[];
  network: string;
  setNetwork: (network: string) => void;
}

const Context = createContext<Context>({
  networks: [MAINNET, TESTNET],
  network: TESTNET,
  setNetwork: () => {
    throw new Error("NetworkContext not created");
  },
});

export const NetworkContext: FC<PropsWithChildren> = ({ children }) => {
  const [network, setNetwork] = useState(networks[0]);
  return (
    <Context.Provider
      value={{
        network,
        setNetwork,
        networks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useNetwork = () => useContext(Context);

export const NetworkSelect = () => {
  const { networks, network, setNetwork } = useNetwork();
  return (
    <select
      name="network"
      id="network"
      value={network}
      onChange={(e) => setNetwork(e.currentTarget.value)}
    >
      {networks.map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
};
