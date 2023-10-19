import { QueryValidatorResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import { FC, useEffect, useState } from "react";
import { useQueryClient } from "../useQueryClient";

export const Validator: FC<{
  address: string;
  validator: string;
  rpc: string;
  mnemonic: string;
}> = ({ address, validator, rpc, mnemonic }) => {
  const { queryClient } = useQueryClient();
  const [info, setInfo] = useState<QueryValidatorResponse>();
  useEffect(() => {
    queryClient?.staking.validator(validator).then(setInfo);
  }, [queryClient]);
  return (
    <dl>
      <dt>Moniker</dt>
      <dd>{info?.validator?.description?.moniker || "loading..."}</dd>
      <dt>Address</dt>
      <dd>{address}</dd>
      <dt>Validator Address</dt>
      <dd>{validator}</dd>
      <dt>RPC</dt>
      <dd>{rpc}</dd>
      <dt>Mnemonic</dt>
      <dd>{mnemonic}</dd>
    </dl>
  );
};
