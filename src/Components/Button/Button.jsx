import React from "react";
import "./Button.css";

function Button(props) {
  const { content, width } = props;
  return (
    <button style={{ width: `${width}px` }} className="button-style">
      {content}
    </button>
  );
}

export default Button;
