import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
export default function Shop() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(actionCreators.increment(100))}>+</button>
      Buy this
      <button onClick={() => dispatch(actionCreators.decrement(100))}>-</button>
    </div>
  );
}
