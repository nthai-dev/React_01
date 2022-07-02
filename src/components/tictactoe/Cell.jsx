import React from "react";

function Cell(props) {
  return (
    <div
      className={`game-cell ${"X" === props.value ? "blue" : "red"}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Cell;
