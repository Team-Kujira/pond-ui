import { FC } from "react";
import { useQueryClient } from "./useQueryClient";

export const Status: FC = () => {
  const { status } = useQueryClient();
  return status ? (
    <span>
      Connected to {status.nodeInfo.moniker}, latest block{" "}
      {status.syncInfo.latestBlockHeight} at{" "}
      {status.syncInfo.latestBlockTime.toISOString()}
    </span>
  ) : status === null ? (
    <span>Connection Failure</span>
  ) : (
    <span>Connecting</span>
  );
};
