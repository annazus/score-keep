import React, { Component } from "react";
import { Players } from "../api/players";
export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
  }
  addPlayer = e => {
    e.preventDefault();
    const playerName = e.target.name.value.trim();
    e.target.name.value = "";
    if (playerName) Players.insert({ name: playerName, score: 0 });
  };

  render() {
    let { title } = this.props;
    return (
      <div className="item">
        {this.props.children}
        <form onSubmit={this.addPlayer} className="form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form__input"
          />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
