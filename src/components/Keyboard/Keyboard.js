import React from "react";

function Keyboard({ letterResults }) {
  function getKeyClassName(key) {
    return `key ${letterResults[key]}`;
  }

  return (
    <div className="keyboard">
      <div className="row">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => {
          return (
            <div className={getKeyClassName(key)} key={key}>
              {key}
            </div>
          );
        })}
      </div>
      <div className="row">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => {
          return (
            <div className={getKeyClassName(key)} key={key}>
              {key}
            </div>
          );
        })}
      </div>
      <div className="row">
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => {
          return (
            <div className={getKeyClassName(key)} key={key}>
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
