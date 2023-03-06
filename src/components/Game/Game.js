import React from "react";
import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard/Keyboard";
import LostGameBanner from "../LostGameBanner/LostGameBanner";
import WonGameBanner from "../WonGameBanner/WonGameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.IN_PROGRESS);
  const [letterResults, setLetterResults] = React.useState({
    A: "unused",
    B: "unused",
    C: "unused",
    D: "unused",
    E: "unused",
    F: "unused",
    G: "unused",
    H: "unused",
    I: "unused",
    J: "unused",
    K: "unused",
    L: "unused",
    M: "unused",
    N: "unused",
    O: "unused",
    P: "unused",
    Q: "unused",
    R: "unused",
    S: "unused",
    T: "unused",
    U: "unused",
    V: "unused",
    W: "unused",
    X: "unused",
    Y: "unused",
    Z: "unused",
  });

  function handleGuess(guess) {
    const result = checkGuess(guess, answer);

    const newLetterResults = { ...letterResults };
    for (const item of result) {
      const { letter, status } = item;
      if (status === "correct") {
        newLetterResults[letter] = "correct";
      }
      if (status === "incorrect" && newLetterResults[letter] === "unused") {
        newLetterResults[letter] = "incorrect";
      }
      if (
        status === "misplaced" &&
        (newLetterResults[letter] === "unused" ||
          newLetterResults[letter] === "incorrect")
      ) {
        newLetterResults[letter] = "misplaced";
      }
    }
    setLetterResults(newLetterResults);

    const newGuessResults = [
      ...guessResults,
      { guess, result, key: crypto.randomUUID() },
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
      <Keyboard letterResults={letterResults}></Keyboard>
      {gameStatus === GAME_STATUS.WON && (
        <WonGameBanner numOfGuesses={guessResults.length} />
      )}
      {gameStatus === GAME_STATUS.LOST && <LostGameBanner answer={answer} />}
    </>
  );
}

export default Game;
