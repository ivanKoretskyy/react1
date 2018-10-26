import React from "react";
import Radium from "radium";
import "./Person.css";

const person = props => {
  const classes = props.vip ? "Person Person-vip" : "Person";
  const style = {
    "@media (max-width: 600px)": {
      width: "100%"
    }
  };
  return (
    <div className={classes} style={style}>
      <div className="person-info">
        <h4>
          I'am a Person. My name is {props.name}, i'm {props.age} years old.
        </h4>
        <input type="text" onChange={props.changeName} />
        <p>{props.children}</p>
      </div>
      <div className="person-action" onClick={props.remove}>
        X
      </div>
    </div>
  );
};

export default Radium(person);
