import React from "react";

export default function Square({squareItem, gameState, updateGameState}) {


 const handleOnClick = (event, squareItem) => {
   event.preventDefault();
   updateGameState.markSquareAsOccupied(
     squareItem.id,
     gameState.currentPlayer.letter
     );
     return;
 };
return (
<div className="square" onClick={(e) => handleOnClick(e, squareItem)}>
  {squareItem.occupiedBy}
  </div>
  );
}
