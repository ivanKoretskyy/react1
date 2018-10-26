import React from "react";
import classes from "./Person.module.scss";

const person = props => {
  const vipPerson = props.vip
    ? classes.Person + " " + classes["Person-vip"]
    : classes.Person;

  return (
    <div className={vipPerson}>
      <div className={classes["person-info"]}>
        <h4>
          I'am a Person. My name is {props.name}, i'm {props.age} years old.
        </h4>
        <input type="text" onChange={props.changeName} />
        <p>{props.children}</p>
      </div>
      <div className={classes["person-action"]} onClick={props.remove}>
        X
      </div>
    </div>
  );
};

export default person;
