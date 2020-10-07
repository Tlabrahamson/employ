import React from "react";

const ErrorAlert = props => {
  return (
    <div className="error-alert">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
};

export default ErrorAlert;
