import Students from "./components/Students";
import StudentReview from "./components/StudentReview";
import React from "react";


class MainBody extends React.Component () {

  render(){
    const whatWeWillBeBuilding = "Taskopedia";
    const totalLectures = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          {" "}
          Building {whatWeWillBeBuilding} <br />
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
        <Students
          programingExp={3}
          fullName="Ivancek Veliki"
          headShot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Students>
        <Students
          programingExp={2}
          fullName="Nesto Novo"
          headShot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Students>
        <Students
          programingExp={5}
          fullName="Daniel Fahenburger"
          headShot="https://api.lorem.space/image/face?w=150&h=150"
        ></Students>
      </div>
    );
  }
}

export default MainBody;
