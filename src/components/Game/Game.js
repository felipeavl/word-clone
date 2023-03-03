import React from "react";
import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import LostGameBanner from "../LostGameBanner/LostGameBanner";
import WonGameBanner from "../WonGameBanner/WonGameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.IN_PROGRESS);

  function handleGuess(guess) {
    const newGuessResults = [
      ...guessResults,
      { guess, result: checkGuess(guess, answer), key: crypto.randomUUID() },
    ];
    setGuessResults(newGuessResults);
    if (guess === answer) {
      setGameStatus(GAME_STATUS.WON);
    } else if (newGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS.LOST);
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        handleGuess={handleGuess}
        disabled={gameStatus !== GAME_STATUS.IN_PROGRESS}
      />
      {gameStatus === GAME_STATUS.WON && (
        <WonGameBanner numOfGuesses={guessResults.length} />
      )}
      {gameStatus === GAME_STATUS.LOST && <LostGameBanner answer={answer} />}
    </>
  );
}

export default Game;
