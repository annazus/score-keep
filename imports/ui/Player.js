import React, { Component } from "react";
import PropTypes from "prop-types";
import { Players } from "../api/players";
export default class Player extends Component {
  render() {
    let { _id } = this.props;
    let players = Players.find(_id).fetch();
    if (players.length === 0) return <div>Player does not exist</div>;

    let player = players[0];
    return (
      <div key={_id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">{player.score} points</p>
          </div>

          <div className="player__actions">
            <button
              className="button button__round"
              onClick={() => Players.update(_id, { $inc: { score: 1 } })}
            >
              +1
            </button>
            <button
              className="button button__round"
              onClick={() => Players.update(_id, { $inc: { score: -1 } })}
            >
              -1
            </button>
            <button
              className="button button__round"
              onClick={() => Players.remove(_id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  _id: PropTypes.string.isRequired
};
