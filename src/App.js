import React, { Component } from "react";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
import "./App.css";

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
    const showPersons = !this.state.showPersons;
    this.setState({ showPersons });
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
    const buttonStyle = {
      font: "inherit",
      fontWeight: "bold",
      border: "2px solid #ff98cc",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "3px",
      backgroundColor: "#55cc22",
      color: "#ffffff",
      ":hover": { backgroundColor: "#22ff55" }
    };
    let persons = null;
    let classes = "hidden";
    if (this.state.showPersons) {
      persons = (
        <div class="flex">
          {this.state.persons.map((e, i) => (
            <Person
              key={e.id}
              name={e.name}
              age={e.age}
              vip={e.isVip}
              changeName={event => this.changeNameHandler(event, i)}
              remove={() => this.removeHandler(i)}
            />
          ))}
        </div>
      );
      buttonStyle.backgroundColor = "#bb6699";
      buttonStyle[":hover"] = { backgroundColor: "#ff3344" };
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Group</h1>
          <button style={buttonStyle} onClick={this.showPersonsTogler}>
            Toggle Person
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
