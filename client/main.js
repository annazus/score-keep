import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Players } from "../imports/api/players";
import { Tracker } from "meteor/tracker";

const renderPlayers = playerList => {
  return playerList.map((item, i) => (
    <p key={item._id}>
      {item.name} has {item.score} points
      <button onClick={() => Players.update(item._id, { $inc: { score: 1 } })}>
        +1
      </button>
      <button onClick={() => Players.update(item._id, { $inc: { score: -1 } })}>
        -1
      </button>
      <button onClick={() => Players.delete(item._id)}>X</button>
    </p>
  ));
};

addPlayer = e => {
  e.preventDefault();
  const playerName = e.target.name.value.trim();
  if (playerName) Players.insert({ name: playerName, score: 0 });
};
Meteor.startup(() => {
  Tracker.autorun(() => {
    let jsx = (
      <div>
        <h1>Score Keeper</h1>
        <div>{renderPlayers(Players.find().fetch())}</div>
        <form onSubmit={addPlayer}>
          <input type="text" name="name" id="name" placeholder="Name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("render-app"));
  });
});
