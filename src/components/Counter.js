import React from "react";

const Counter = props => (
    <h4 className="clickcount">Score: {props.point} | Top Score: {props.highPoint} </h4>
);
export default Counter;


