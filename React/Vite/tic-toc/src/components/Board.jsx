import React from "react";
import './style.css'
import Square from "./Square";
import { useState } from "react";
export default function Board() {

    const [xIsNext,setXIsNext] = useState(true) ; 
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    const handle = (i) => {
        const nextSquares = squares.slice();
        if(nextSquares[i] == null){
            if(xIsNext){
                nextSquares[i] = "X";
            }
            else{
                nextSquares[i] = "O";
            }
            setXIsNext(!xIsNext);
        }
        
        setSquares(nextSquares);
    };
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]}  SquareClicked={() => handle(0)}></Square>
                <Square value={squares[1]}  SquareClicked={() => handle(1)}> </Square>
                <Square value={squares[2]}  SquareClicked={() =>handle(2)}> </Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} SquareClicked={() => handle(3)}></Square>
                <Square value={squares[4]} SquareClicked={() => handle(4)}> </Square>
                <Square value={squares[5]} SquareClicked={() => handle(5)}> </Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} SquareClicked={() => handle(6)}></Square>
                <Square value={squares[7]} SquareClicked={() => handle(7)}> </Square>
                <Square value={squares[8]} SquareClicked={() => handle(8)}> </Square>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }