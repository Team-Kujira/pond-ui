import react from "@vitejs/plugin-react-swc";
import rollupPolyfill from "rollup-plugin-polyfill-node";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
    {
      ...rollupPolyfill({ include: null }),
      // Make sure we do this _after_ the CJS analysis so that
      // the import statement doesn't confuse things
      enforce: "post",
    },
  ],
  resolve: {
    alias: {
      "readable-stream": "vite-compatible-readable-stream",
    },
  },
});
