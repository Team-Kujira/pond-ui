import config from "../config.json";

export interface NodeConfig {
  moniker: string;
  address: string;
  valoper: string;
  node_id: string;
  mnemonic?: string;
  rpc_url: string;
}

interface ChainConfig {
  validators: NodeConfig[];
}

export const chains: Record<string, ChainConfig> = config.chains;
