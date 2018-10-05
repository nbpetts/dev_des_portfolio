import React from "react";
import Story from "./Story";
import dev from "../Data/dev.json";

export default function RightPanel(props) {
  return (
    <div className="right" style={props.styles}>
      <Story data={dev.first} />
    </div>
  );
}
