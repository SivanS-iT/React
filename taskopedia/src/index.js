import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./header";
import Students from "./students";

const root = ReactDOM.createRoot(document.getElementById("root"));


function MainBody() {
  const whatWeWillBeBuilding = "Taskopedia";
  const totalLectures = 3;
  return (
    <div>
      <p> Building {whatWeWillBeBuilding} <br/>
          Total lectures - {totalLectures}
      </p>
      <p> </p>
      <ul>
        <li>Call somebody</li>
        <li>Go somewhere</li>
      </ul>
      <div>
        Enter task: <input maxLength={5} placeholder="Ben"></input>
      </div>
    </div>
  );
}



function Footer() {
  return <p style={{ color: "gray", backgroundColor: "black" }}> nice </p>;
}
root.render(
  <div>
    <Header></Header>
    <MainBody></MainBody>
    <Students></Students>
    <Footer></Footer>
  </div>
);
