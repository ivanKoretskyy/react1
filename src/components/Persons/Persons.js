import React from "react";
import Person from "../Person/Person";

const persons = props =>
  props.persons.map((e, i) => (
    <Person
      key={e.id}
      name={e.name}
      age={e.age}
      vip={e.isVip}
      changeName={event => props.changeName(event, i)}
      remove={() => props.remove(i)}
    />
  ));

export default persons;
