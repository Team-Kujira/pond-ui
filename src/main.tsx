import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { NetworkContext } from "./services/useNetwork.tsx";
import { QueryContext } from "./services/useQueryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NetworkContext>
      <QueryContext>
        <App />
      </QueryContext>
    </NetworkContext>
  </React.StrictMode>
);
