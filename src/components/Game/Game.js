import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuess(guess) {
    // Check if the guess is correct.
    if (guess === answer) {
      setGuessResults((prevGuessResults) => [
        ...prevGuessResults,
        { guess, result: "CORRECT", key: crypto.randomUUID() },
      ]);
      return;
    }

    // Check if the guess is incorrect.
    if (guess !== answer) {
      setGuessResults((prevGuessResults) => [
        ...prevGuessResults,
        { guess, result: "INCORRECT", key: crypto.randomUUID() },
      ]);
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
