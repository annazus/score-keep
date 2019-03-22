import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Player from "./Player";
import PropTypes from "prop-types";
export default class PlayerList extends Component {
  renderPlayers = playerList => {
    if (playerList.length === 0) {
      return (
        <div className="item item__message">
          <p>Add your first player to get started!</p>
        </div>
      );
    } else
      return playerList.map((item, i) => <Player _id={item._id} key={i} />);
  };
  render() {
    let { players } = this.props;
    return (
      <FlipMove maintainContainerHeight={true}>
        {this.renderPlayers(players)}
      </FlipMove>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
