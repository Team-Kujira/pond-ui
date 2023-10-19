import { BlockResponse } from "@cosmjs/tendermint-rpc";
import { useEffect, useState } from "react";
import config from "../config.json";
import "./App.css";
import { Status } from "./Status";
import { Validator } from "./Validator";
import reactLogo from "./assets/react.svg";
import { NetworkSelect } from "./useNetwork";
import { useQueryClient } from "./useQueryClient";
import viteLogo from "/vite.svg";

function App() {
  const { tmClient } = useQueryClient();
  const [block, setBlock] = useState<BlockResponse>();
  useEffect(() => {
    tmClient?.block().then(setBlock);
  }, [tmClient]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://kujira.network" target="_blank">
          <img src={reactLogo} className="logo kujira" alt="Kujira logo" />
        </a>
      </div>
      <h1>Vite + React + Kujira</h1>
      <div className="card">
        <button>block height: {block?.block.header.height}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Kujira logos to learn more
      </p>
      <div>
        <h2>
          <NetworkSelect />
          Local Network:
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
