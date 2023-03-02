import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessWord = guess?.guess ?? "";

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span className="cell" key={i}>
          {guessWord[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
