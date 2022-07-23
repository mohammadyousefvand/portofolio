import React from "react";
import "./Error.css";
import { MdError } from "react-icons/md";

function Error({ children }) {
  return (
    <div className="err-wrapper flex">
      <MdError className="err-icon" />
      <span className="err-text">{children}</span>
    </div>
  );
}

export default Error;
