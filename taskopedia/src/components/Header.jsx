import logo from "../images/react.png";

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
  return <h2 style={subHeaderStyle} className="text-center">Nothing to see here</h2>;
}

const Header = (props) => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

export default Header;