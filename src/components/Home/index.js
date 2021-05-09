import React, { useState } from "react";

// Components
import Square from "../Square";
import squareStore from "../../squareStore";

const Home = () => {
  const [player, setPlayer] = useState("x");
  const squaresIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const { pressedSquares } = squareStore;

  const calculateWinner = (squares) => {
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

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const list = squaresIndex.map((index) => (
    <Square player={player} setPlayer={setPlayer} index={index} key={index} />
  ));

  const winner = calculateWinner(pressedSquares);

  return (
    <div className="container">
      {!winner ? (
        !pressedSquares.includes(null) ? (
          <>
            <h2 className="title">DRAW</h2>
            <button className="reload" onClick={() => window.location.reload()}>
              reset
            </button>
          </>
        ) : (
          <h2 className="title">{player} turn</h2>
        )
      ) : (
        <>
          <h2 className="title">{winner} has won!</h2>
          <button className="reload" onClick={() => window.location.reload()}>
            reset
          </button>
        </>
      )}
      <div className="wrapper">{list}</div>
    </div>
  );
};

export default Home;
