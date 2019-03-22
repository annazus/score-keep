import React, { Component } from "react";
import PropTypes from "prop-types";
import TitleBar from "./TitleBar";
import PlayerList from "./PlayerList";
import AddPlayer from "./AddPlayer";
export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} author={this.props.author} />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer>
            <h1>Add Player</h1>
          </AddPlayer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  players: PropTypes.array.isRequired
};
