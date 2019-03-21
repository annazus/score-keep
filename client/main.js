import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Players } from "../imports/api/players";
import App from "../imports/ui/App";
import { Tracker } from "meteor/tracker";
Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(
      <App
        title="Score Keep"
        players={Players.find({}, { sort: { score: -1 } }).fetch()}
      />,
      document.getElementById("render-app")
    );
  });
});
