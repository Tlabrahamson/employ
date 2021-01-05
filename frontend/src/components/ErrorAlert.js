import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorAlert = props => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.clearError}
      >
        <Alert onClose={props.clearError} severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorAlert;
