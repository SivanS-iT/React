import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact";
import ResetApp from "./components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <ResetApp/>
      <Counter />
      <DestinationList />
      <DestinationFact/>
    </Provider>
  </React.StrictMode>
);
