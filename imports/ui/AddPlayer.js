import React, { Component } from "react";
import { Players } from "../api/players";
export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
  }
  addPlayer = e => {
    e.preventDefault();
    const playerName = e.target.name.value.trim();
    if (playerName) Players.insert({ name: playerName, score: 0 });
  };

  render() {
    let { title } = this.props;
    return (
      <form onSubmit={this.addPlayer}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <button>Add Player</button>
      </form>
    );
  }
}
