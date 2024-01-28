import React from "react";

class Students extends React.Component {
  render() {
    return (
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-5">
            <img src={this.props.headShot} className="w-100 py-6" alt="Images"></img>
          </div>
          <div className="col-8">
            {this.props.fullName}
            <br />
            Programing Experiance {this.props.programingExp} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Students;

//{`https://ui-avatars.com/api/?name=${props.fullName}`}
