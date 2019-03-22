import React, { Component } from "react";
import PropTypes from "prop-types";
import { Players } from "../api/players";
export default class Player extends Component {
  render() {
    let { player } = this.props;
    let itemClassName = `item item__position-${player.rank}`;
    return (
      <div className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">
              {player.position} place - {player.score} points
            </p>
          </div>

          <div className="player__actions">
            <button
              className="button button__round"
              onClick={() => Players.update(player._id, { $inc: { score: 1 } })}
            >
              +1
            </button>
            <button
              className="button button__round"
              onClick={() =>
                Players.update(player._id, { $inc: { score: -1 } })
              }
            >
              -1
            </button>
            <button
              className="button button__round"
              onClick={() => Players.remove(player._id)}
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
  player: PropTypes.object.isRequired
};
