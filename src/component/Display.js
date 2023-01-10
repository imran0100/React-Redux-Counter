import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <button disabled={true}>{amount}</button>
    </div>
  );
}

export default Display;
