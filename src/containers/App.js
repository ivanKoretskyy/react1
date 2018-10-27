import React, { Component } from "react";
import Person from "../components/Person/Person";
import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { name: "Ivan", age: 39, id: "id1", isVip: true },
      { name: "Vasyl", age: 38, id: "id2", isVip: false },
      { name: "Tomy", age: 36, id: "id3", isVip: false }
    ],
    showPersons: false
  };

  sort = () => {
    const persons = this.state.persons.sort((a, b) => (a.age > b.age ? 1 : -1));
    console.log(persons);
    this.setState({ persons });
  };
  showPersonsTogler = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }));
  };

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({ persons });
  };
  removeHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div className={classes.flex}>
          <Persons
            persons={this.state.persons}
            changeName={this.changeNameHandler}
            remove={this.removeHandler}
          />
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.showPersonsTogler}
          showPersons={this.state.showPersons}
        />

        {persons}
      </div>
    );
  }
}

export default App;
