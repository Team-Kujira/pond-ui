import { BlockResponse } from "@cosmjs/tendermint-rpc";
import { useEffect, useState } from "react";
import { Status, Validator } from "./components";
import { chains } from "./config";
import "./css/App.css";
import { NetworkSelect, useNetwork } from "./useNetwork";
import { useQueryClient } from "./useQueryClient";

function App() {
  const { tmClient } = useQueryClient();
  const [block, setBlock] = useState<BlockResponse>();
  useEffect(() => {
    tmClient?.block().then(setBlock);
  }, [tmClient]);

  const { network } = useNetwork();

  return (
    <>
      <div className="header">
        <img
          src="/kujira-logo.png"
          srcSet="/kujira-logo.png, /kujira-logo@2x.png 2x"
          className="logo"
          alt="Kujira logo"
        />
        <pre>
          block height:{" "}
          <strong className="color-white">{block?.block.header.height}</strong>
        </pre>
      </div>

      <div className="body">
        <h1>Kujira Pond</h1>
        <h2>
          <NetworkSelect />
        </h2>
        <Status />
        <ul>
          {chains[network].nodes.map((n) => (
            <Validator key={n.address} {...n} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
