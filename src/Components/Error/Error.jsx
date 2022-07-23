import React from "react";
import "./Error.css";

function Error({ children }) {
  return <div className="err">{children}</div>;
}

export default Error;
