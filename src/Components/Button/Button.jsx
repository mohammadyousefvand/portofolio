import React from "react";
import "./Button.css";

function Button(props) {
  const { content } = props;
  return <button className="button-style">{content}</button>;
}

export default Button;
