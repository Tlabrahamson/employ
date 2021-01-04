import React from "react";

// Need to make the error handling a bit more appealing

const ErrorAlert = props => {
  return (
    <div className="error-alert">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
};

export default ErrorAlert;
