import React, { Component } from "react";
import PropTypes from "prop-types";
export default class TitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, author } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h3>Created by {author}</h3>
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
