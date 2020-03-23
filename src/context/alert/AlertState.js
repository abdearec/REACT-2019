import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { REMOVE_ALERT, SET_ALERT } from "../types";
const AlertState = props => {
  const initialState = { alert: null };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //SET ALERT
  /* const searchSetAlert = (msg, type) => { */
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 1000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
