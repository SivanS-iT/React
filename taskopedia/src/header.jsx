function MainHeader() {
    return <h1 className="heading1">React Getting Started</h1>;
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
