import React from "react";

export default function Square({
  currentPlayer,
  setNextPlayer,
  squareItem,
  onUpdateBoard,
}) {
  const handleOnClick = (event, squareItem) => {
    event.preventDefault();
    if (squareItem.occupiedBy === "") {
      onUpdateBoard(squareItem.id, currentPlayer.letter);

      if (currentPlayer.player === 1) {
        return setNextPlayer({ player: 2, letter: "O" });
      } else {
        return setNextPlayer({ player: 1, letter: "X" });
      }
    }
  };

  return (
    <div onClick={(e) => handleOnClick(e, squareItem)} className="square">
      {squareItem.occupiedBy}
    </div>
  );
}
