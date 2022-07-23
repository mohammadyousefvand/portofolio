import React from "react";
import "./Button.css";

function Button(props) {
  const { content, width, border, type = "button" } = props;
  return (
    <button
      style={{ width: `${width}`, borderRadius: `${border}` }}
      className="button-style"
      type={type}
    >
      {content}
    </button>
  );
}

export default Button;
