import React from "react";
import ReactDOM from "react-dom"; // Correct import for ReactDOM
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
