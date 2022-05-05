import { createRoot } from "react-dom/client";
import store from "./store/Store";
import { Provider } from "react-redux";
import Container from "./container/container";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);
