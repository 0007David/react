import React from 'react';
import { useState } from 'react';

export function Square({ value, onSquareClick }) {

    return (
        <button
            className="square"
            onClick={onSquareClick}>
            {value}
        </button>
    );
}


export function Board({ xIsNext, squares, onPlay }) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    // Imperativa Version
    function buildBoardRow(nroRow) {
        const length = (nroRow + 1) * 3;
        let squareElements = [];
        for (let index = (nroRow * 3); index < length; index++) {
            squareElements.push(
                <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                />
            );
        }
        return (
            <div className="board-row">
                {squareElements}
            </div>
        );
    }
    // Functional programing
    function buildBoardRow2(nroRow) {
        const start = nroRow * 3;
        const row = squares.slice(start, start + 3);

        return (
            <div className="board-row">
                {row.map((value, index) => (
                    <Square
                        key={start + index}
                        value={value}
                        onSquareClick={() => handleClick(start + index)}
                    />
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="status">{status}</div>
            {buildBoardRow2(0)}
            {buildBoardRow2(1)}
            {buildBoardRow2(2)}
        </>
    );
}

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        // console.log("len: " + (history.length - 1), move);

        let description;
        if ((history.length - 1) === move) {
            description = 'You are at move #' + move;
        } else if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}
                </ol>
            </div>
        </div>
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
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
