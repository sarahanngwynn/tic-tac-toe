import React from "react";

export default function Square({ currentPlayer, setNextPlayer, squareItem }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("Great");
    if (currentPlayer.player === 1) {
      return setNextPlayer({ player: 2, letter: "O" });
    } else {
      return setNextPlayer({ player: 1, letter: "X" });
    }
  };

  return (
    <div onClick={handleOnClick} className="square">
      {squareItem.occupiedBy}
    </div>
  );
}
