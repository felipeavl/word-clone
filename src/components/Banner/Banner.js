import React from "react";

function Banner({ status, children, handleNewGame }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <input
        type={"button"}
        className="wordle-btn"
        value={"Play Again"}
        onClick={() => handleNewGame()}
      />
    </div>
  );
}

export default Banner;
