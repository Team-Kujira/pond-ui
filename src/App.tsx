import { BlockResponse } from "@cosmjs/tendermint-rpc";
import { useEffect, useState } from "react";
import config from "../config.json";
import "./css/App.css";
import { Status, Validator } from "./components";
import { useQueryClient } from "./useQueryClient";

function App() {
  const { tmClient } = useQueryClient();
  const [block, setBlock] = useState<BlockResponse>();
  useEffect(() => {
    tmClient?.block().then(setBlock);
  }, [tmClient]);

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
          <strong>pond-1</strong> Local Network:
        </h2>
        <Status />
        <ul>
          {config.chains["pond-1"].nodes.map((n) => (
            <Validator key={n.address} {...n} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
