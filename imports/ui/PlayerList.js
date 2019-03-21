import React, { Component } from "react";
import Player from "./Player";
import PropTypes from "prop-types";
export default class PlayerList extends Component {
  renderPlayers = playerList => {
    if (playerList.length === 0) {
      return <p>Add your first player to get started!</p>;
    } else
      return playerList.map((item, i) => (
        <Player _id={item._id} key={item._id} />
      ));
  };
  render() {
    let { players } = this.props;
    return <div>{this.renderPlayers(players)}</div>;
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
