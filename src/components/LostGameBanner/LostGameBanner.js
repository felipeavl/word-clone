import React from "react";
import Banner from "../Banner/Banner";

function LostGameBanner({ answer, handleNewGame }) {
  return (
    <Banner status="sad" handleNewGame={handleNewGame}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostGameBanner;
