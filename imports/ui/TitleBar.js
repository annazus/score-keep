import React, { Component } from "react";
import PropTypes from "prop-types";
export default class TitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, author } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          <h2 className="title-bar__subtitle">Created by {author}</h2>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};
TitleBar.defaultProps = {
  title: "A Meteor App",
  author: "Anonymous"
};
