import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessWord = guess?.guess ?? "";
  const result = guess?.result ?? undefined;

  return (
    <p className="guess">
      {range(5).map((i) => {
        let className = "cell";
        if (result) {
          className += ` ${result[i].status}`;
        }

        return (
          <span className={className} key={i}>
            {guessWord[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
