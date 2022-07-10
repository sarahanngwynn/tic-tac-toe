
import React, { useState, useEffect } from "react";
import Board from "./Board.js";
import { initialBoard } from "./const.js";
import { checkBoard } from "./util.js";
import "./global.css";

export default function App() {

  const [gameState, setGameState] = useState({
    currentPlayer: {
      player: "Player 1",
      letter: "X",
    },
    board: initialBoard,
  });

  const updateGameState = {
    markSquareAsOccupied: (id, playerLetter) => {
      console.log(gameState)
      //creating copy of currentGameState
      const newGameState = Object.assign({}, gameState);
      //a square is marked as occupied so switch the current player

      newGameState.currentPlayer =
        gameState.currentPlayer.player === "Player 1"
          ? { player: "Player 2", letter: "O" }
          : { player: "Player 1", letter: "X" };
        //update square on the board
        (newGameState.board = gameState.board.map((squareItem) => {
          if (squareItem.id === id) {
            return { id: squareItem.id, occupiedBy: playerLetter };
          } else {
            return squareItem;
          }
        }));
      setGameState(newGameState);
    },
  };
  useEffect(() => {
    checkBoard(gameState.board);
  }, [gameState]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>
        {" "}

        Player: {gameState.currentPlayer.player} :{" "}
        {gameState.currentPlayer.letter}
      </p>
      <Board gameState={gameState} updateGameState={updateGameState} />
    </div>
  );
}
