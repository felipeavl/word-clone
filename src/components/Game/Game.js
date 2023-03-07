import React from "react";
import {
  GAME_STATUS,
  LETTERS_RESULTS_INITIAL_STATE,
  NUM_OF_GUESSES_ALLOWED,
} from "../../constants";

import { WORDS } from "../../data";
import { checkGuess, updateLetterResults } from "../../game-helpers";
import { sample } from "../../utils";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard/Keyboard";
import LostGameBanner from "../LostGameBanner/LostGameBanner";
import WonGameBanner from "../WonGameBanner/WonGameBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    console.info({ answer });
    return answer;
  });

  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.IN_PROGRESS);
  const [letterResults, setLetterResults] = React.useState(
    LETTERS_RESULTS_INITIAL_STATE
  );

  function handleNewGame() {
    setAnswer(sample(WORDS));
    setGuessResults([]);
    setGameStatus(GAME_STATUS.IN_PROGRESS);
    setLetterResults(LETTERS_RESULTS_INITIAL_STATE);
  }

  function handleGuess(guess) {
    const result = checkGuess(guess, answer);

    setLetterResults(updateLetterResults(letterResults, result));

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
        <WonGameBanner
          numOfGuesses={guessResults.length}
          handleNewGame={handleNewGame}
        />
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <LostGameBanner answer={answer} handleNewGame={handleNewGame} />
      )}
    </>
  );
}

export default Game;
