// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React from "react";

interface Props {
  onClick: (postcode: string) => void;
}

export const Input: React.FC<Props> = ({ onClick }) => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState(false);
  return (
    <div className="inputContainer">
      <input
        className="input"
        type="text"
        onChange={(e) => {
          const spaceCheck = /\s/g;
          const regTest = spaceCheck.test(e.target.value);
          if (regTest) {
            console.log("true");
            setError(true);
          } else {
            console.log("nope");
            setError(false);
            setText(e.target.value);
          }
        }}
      ></input>
      <button className="button" onClick={() => onClick(text)}>
        Click to view results
      </button>
      {error && <div className="error">No spaces in the postcode please</div>}
    </div>
  );
};
