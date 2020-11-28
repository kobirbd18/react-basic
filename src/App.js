import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Md.Kobir Hossain", age: 28 },
      { id: 2, name: "Md.Solaiman Khan", age: 28 },
      { id: 3, name: "Md.Eliyas Hossain", age: 30 },
    ],
    showPersonList: false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersonList;
    this.setState({ showPersonList: !doesShow });
  };

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((prsn) => {
      return prsn.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  render() {
    let persons = null;
    if (this.state.showPersonList) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                delete={() => this.deletePersonHandler(index)}
                changed={(event) => this.changedNameHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello! I am Kobir Hossain</h1>
        <p>I'm a Software Engineer.</p>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
