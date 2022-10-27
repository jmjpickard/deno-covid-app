// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React from "react";

interface Props {
  onClick: (postcode: string) => void;
}

export const Input: React.FC<Props> = ({ onClick }) => {
  const [text, setText] = React.useState("");
  return (
    <div className="inputContainer">
      <input
        className="input"
        type="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="button" onClick={() => onClick(text)}>
        Click to view results
      </button>
    </div>
  );
};
