import React, { Component } from "react";
import PropTypes from "prop-types";
import { Players } from "../api/players";
export default class Player extends Component {
  render() {
    let { _id } = this.props;
    let player = Players.find(_id).fetch()[0];
    return (
      <p key={_id}>
        {player.name} has {player.score} points
        <button onClick={() => Players.update(_id, { $inc: { score: 1 } })}>
          +1
        </button>
        <button onClick={() => Players.update(_id, { $inc: { score: -1 } })}>
          -1
        </button>
        <button onClick={() => Players.remove(_id)}>X</button>
      </p>
    );
  }
}

Player.propTypes = {
  _id: PropTypes.string.isRequired
};
