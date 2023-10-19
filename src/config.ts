import config from "../config.json";

export interface NodeConfig {
  address: string;
  validator: string;
  mnemonic?: string;
  rpc: string;
}

interface ChainConfig {
  nodes: NodeConfig[];
}

export const chains: Record<string, ChainConfig> = config.chains;
