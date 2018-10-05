import React, { Component } from "react";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: true,
    };
  }
  renderFields = () => {
    const {
      headline,
      subhead,
      paragraphs,
      images,
      list,
      linkDestination,
      linkText,
    } = this.props.data;
    if (this.state.card) {
      return (
        <div>
          <h2>{headline}</h2>
          <h3>{subhead}</h3>
          <img src={images[0]} alt="An Image" />
          <a href="#">Learn More</a>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderFields()}</div>;
  }
}
