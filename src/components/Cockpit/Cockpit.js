import React from "react";

const cockpit = props => {
  const buttonStyle = {
    font: "inherit",
    fontWeight: "bold",
    border: "2px solid #ff98cc",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "3px",
    color: "#ffffff"
  };
  buttonStyle.backgroundColor = props.showPersons ? "#bb6699" : "#55cc22";
  return (
    <>
      <h1>Group</h1>
      <button style={buttonStyle} onClick={props.clicked}>
        Toggle Person
      </button>
    </>
  );
};

export default cockpit;
