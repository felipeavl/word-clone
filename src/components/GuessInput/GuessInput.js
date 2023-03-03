import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        maxLength="5"
        disabled={disabled}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) =>
          setGuess(e.target.value ? e.target.value.toUpperCase() : "")
        }
      />
    </form>
  );
}

export default GuessInput;
