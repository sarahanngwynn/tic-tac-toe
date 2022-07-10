import React from "react";
import Square from "./Square.js";



export default function Board({ gameState, updateGameState }) {

  return (
    <div className="board">
      {gameState.board.map((item) => (
        <Square

          gameState={gameState}
          updateGameState={updateGameState}
          key={item.id}
          squareItem={item}
        />
      ))}
    </div>
  );
}
