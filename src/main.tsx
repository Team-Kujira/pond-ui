import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { QueryContext } from "./useQueryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryContext>
      <App />
    </QueryContext>
  </React.StrictMode>
);
