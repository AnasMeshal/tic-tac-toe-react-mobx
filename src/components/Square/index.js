import React, { useState } from "react";

// Stores
import squareStore from "../../squareStore";

const Square = ({ player, setPlayer, index }) => {
  const { pressedSquares } = squareStore;
  const [value, setValue] = useState("");

  const click = () => {
    if (value === "") {
      setPlayer(player === "x" ? "o" : "x");
      setValue(player);
      pressedSquares[index] = player;
    }
  };
  return (
    <div>
      <button onClick={() => click()} className="button">
        {value}
      </button>
    </div>
  );
};

export default Square;
