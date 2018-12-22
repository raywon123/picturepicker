import React from "react";
import "./Title.css";

let str = "Click on an image to earn points, but don't click on any more than once!";

const Title = props => (
    <div>
        <h1 className="title">{props.children}</h1>
        <h3> {str} </h3>
    </div>
);
export default Title;
