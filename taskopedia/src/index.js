import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Students from "./Students";
import Footer from "./Footer";

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


root.render(
  <div>
    <Header></Header>
    <MainBody></MainBody>
    <div className="container">Students enroled</div>
    <Students programingExp={3} fullName="Ivancek Veliki" headShot="https://api.lorem.space/image/face?w=150&h=150"></Students>
    <Students programingExp={2} fullName="Nesto Novo" headShot="https://api.lorem.space/image/face?w=150&h=150"></Students>
    <Students programingExp={5} fullName="Daniel Fahenburger" headShot="https://api.lorem.space/image/face?w=150&h=150"></Students>
    <Footer></Footer>
  </div>
);
