import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
<<<<<<< HEAD
import "./css/index.css";
=======
import "./index.css";
import { NetworkContext } from "./useNetwork.tsx";
>>>>>>> 795c3b1248d51519096f07054f6e0d0f3ee6fd3a
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
