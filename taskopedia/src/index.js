import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Header></Header>
    <div className="px-4">
      <MainBody></MainBody>
    </div>
    <div className="container">Students enroled</div>
    <Footer></Footer>
  </div>
);
