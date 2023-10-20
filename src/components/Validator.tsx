import { QueryValidatorResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { FC, useEffect, useState } from "react";
import { NodeConfig } from "../config";
import { useQueryClient } from "../services/useQueryClient";

export const Validator: FC<NodeConfig> = ({
  address,
  valoper,
  rpc_url,
  mnemonic,
}) => {
  const { queryClient } = useQueryClient();
  const [info, setInfo] = useState<QueryValidatorResponse>();
  useEffect(() => {
    queryClient?.staking.validator(valoper).then(setInfo);
  }, [queryClient]);
  return (
    <dl>
      <dt>Moniker</dt>
      <dd>{info?.validator?.description?.moniker || "loading..."}</dd>
      <dt>Address</dt>
      <dd>{address}</dd>
      <dt>Validator Address</dt>
      <dd>{valoper}</dd>
      <dt>RPC</dt>
      <dd>{rpc_url}</dd>
      {mnemonic && (
        <>
          <dt>Mnemonic</dt>
          <dd>{mnemonic}</dd>
        </>
      )}
    </dl>
  );
};
