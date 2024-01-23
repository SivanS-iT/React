import logo from "./react.png";

function MainHeader() {
  return (
    <div className="py-2 pl-2" style={{ background: "black" }}>
      <img
        className="m-1"
        src={logo}
        style={{ height: "40px" }}
      ></img>
      <spam
        className="h2 m-3 text-white-30"
        style={{ color: "white", verticalAlign: "center" }}
      >
        React Getting Started
      </spam>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <h2 style={subHeaderStyle}>Nothing to see here</h2>;
}

export default function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
