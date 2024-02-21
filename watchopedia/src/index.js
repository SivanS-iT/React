import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Counter from "./Counter";
import MoviePage from "./MovieComponents/MoviePage";
//import MoviePage from "./MovieComponenets/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="p-2 m-2 row text-center">
      <Counter></Counter>
      <MoviePage></MoviePage>
    </div>
  </React.StrictMode>
);