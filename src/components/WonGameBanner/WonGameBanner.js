import React from "react";
import Banner from "../Banner/Banner";

function WonGameBanner({ numOfGuesses, handleNewGame }) {
  return (
    <Banner status="happy" handleNewGame={handleNewGame}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonGameBanner;
