import { FC } from "react";
import { useQueryClient } from "../useQueryClient";

export const Status: FC = () => {
  const { status } = useQueryClient();
  return (
    <p className="status">
      {status ? (
        <>
          Connected to <strong>{status.nodeInfo.moniker}</strong>, latest block{" "}
          <strong>{status.syncInfo.latestBlockHeight}</strong> at{" "}
          <strong>{status.syncInfo.latestBlockTime.toISOString()}</strong>
        </>
      ) : status === null ? (
        <>Connection Failure</>
      ) : (
        <>Connecting...</>
      )}
    </p>
  );
};
