import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  </React.StrictMode>
);
