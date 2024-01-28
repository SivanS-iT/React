import React from "react";

class StudentReview extends React.Component {
  render() {
    return (
      <div className="p-2">
        <i
          class="bi bi-hand-thumbs-up-fill text-success p-2"
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="bi bi-hand-thumbs-up-fill text-danger"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
}

export default StudentReview;
