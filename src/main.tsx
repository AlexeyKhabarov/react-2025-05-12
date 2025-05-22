import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

const reactRoot = createRoot(root);

reactRoot.render(<App />);
