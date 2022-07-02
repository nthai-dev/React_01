import React from "react";
import { useState } from "react";
import Board from "./Board";
import { caculateWinner } from "../../helper/Tictactoe";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    board[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    const winner = caculateWinner(board);
    console.log(winner);
    if (winner != null) {
      alert(`Winner is ${winner}!`);
      setBoard(Array(9).fill());
    }
  };
  const [xIsNext, setXIsNext] = useState(true);

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
}
