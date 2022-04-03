import React from "react";

export default function Square(props) {
  return <div className="square">{props.squareItem.occupiedBy}</div>;
}
