import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NetworkContext } from "./useNetwork.tsx";
import { QueryContext } from "./useQueryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NetworkContext>
      <QueryContext>
        <App />
      </QueryContext>
    </NetworkContext>
  </React.StrictMode>
);
