import React, { Component } from "react";
import classnames from "classnames";
import Draggable from "react-draggable";
import Header from "./UI/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftStyles: {
        width: "50vw",
      },
      rightStyles: {
        width: "50vw",
      },
      centerStyles: {
        transform: "translate(0px ,0px )",
      },
      position: {
        x: 0,
        y: 0,
      },
    };
  }

  handleDragStart = event => {
    // console.log('handleDragStart', event);
  };
  handleDragEnd = event => {
    // console.log("handleDragEnd", event);
    const screenWidth = window.innerWidth;
    const percent = event.screenX / screenWidth;
    const centerRight = screenWidth / 2;
    console.log(centerRight);
    if (percent <= 0.3) {
      this.setState({
        rightStyles: { width: "100vw" },
        leftStyles: { width: "0vw" },
        position: { x: -centerRight, y: 0 },
      });
    }
    if (percent >= 0.6) {
      this.setState({
        leftStyles: { width: "100vw" },
        rightStyles: { width: "0vw" },
        position: { x: centerRight, y: 0 },
      });
    }
  };
  handleDragOver = (event, data) => {
    const rect = data.node.getBoundingClientRect();
    const center = (rect.left + rect.right) / 2;
    const screenWidth = window.innerWidth;
    console.log(data);
    const left = center;
    const right = screenWidth - center;
    // console.log(right);
    const leftWidth = `${left}px`;
    const rightWidth = `${right}px`;
    this.setState({
      leftStyles: { width: leftWidth },
      rightStyles: { width: rightWidth },
      position: { x: data.x, y: 0 },
    });
  };
  render() {
    // console.log(this.state.leftStyles);
    // console.log(this.state);
    const leftStyles = { width: this.state.leftStyles.width };
    const rightStyles = { width: this.state.rightStyles.width };
    const { position } = this.state;

    return (
      <div className="app">
        <Header />
        <main>
          <LeftPanel styles={leftStyles} />
          <RightPanel styles={rightStyles} />
          <Draggable
            axis="x"
            bounds="main"
            onStart={this.handleDragStart}
            onDrag={this.handleDragOver}
            onStop={this.handleDragEnd}
            position={position}
          >
            <div className="center" />
          </Draggable>
        </main>
      </div>
    );
  }
}

export default App;
