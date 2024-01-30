import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);

    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: ""
    };
  }

  handleAttack = () => {
    //alert("Attack Clicked");
    //this.setState({ count: this.state.count + 1 });
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount>10? " you WON!!": previousState.gameStatus,
        lastPlay: "Attack"
      };
    });
  };

  handleDefence = () => {
    //alert("Defend Clicked");
    //this.setState({ count: this.state.count - 1 });
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount<-10? " you LOST!!": previousState.gameStatus,
        lastPlay: " Defence"
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) this.handleAttack();
    else this.handleDefence();
  };

  handleResetPlay = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: ""
      };
    });
  };


  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game score: {this.state.count}</h1>
        <p>You will win at +10 points and lose at -10 points</p>
        <p>Last play: {this.state.lastPlay}</p>
        <p>Game status: {this.state.gameStatus}</p>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            alt=""
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>

        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            alt=""
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          />
        </div>

        <div className="col-12 col-md-4 offset-md-4">
          <button
            onClick={this.handleRandomPlay}
            className="btn btn-secondary w-100 mt-2"
          >
            Random play
          </button>
          <br />
          <button
            onClick={this.handleResetPlay}
            className="btn btn-warning w-100 mt-2"
          >
            Random play
          </button>
        </div>
      </div>
    );
  }
}
