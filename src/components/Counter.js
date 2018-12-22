import React from "react";

const Counter = props => (
    <p className="clickcount">Score: {props.point} | Top Score: {props.highPoint} </p>
);
export default Counter;


