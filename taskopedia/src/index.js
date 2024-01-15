import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function MainHeader() {
  return <h1>React Getting Started</h1>;
}
function SubHeader() {
  return <h2>Nothing to see here</h2>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
function MainBody() {
  return (
    <div>
      <p> Building taskopedia</p>
      <ul>
        <li>Call somebody</li>
        <li>Go somewhere</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p> nice </p>;
}
root.render(
  <div>
    <Header></Header>
    <MainBody></MainBody>
    <Footer></Footer>
  </div>
);
