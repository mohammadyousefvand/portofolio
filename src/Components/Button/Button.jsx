import React from "react";
import "./Button.css";

function Button(props) {
  const { content, width, border } = props;
  return (
    <button
      style={{ width: `${width}`, borderRadius: `${border}` }}
      className="button-style"
    >
      {content}
    </button>
  );
}

export default Button;
