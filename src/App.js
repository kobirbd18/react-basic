import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Md.Kobir Hossain", age: 28 },
      { name: "Md.Solaiman Khan", age: 28 },
      { name: "Md.Eliyas Hossain", age: 30 },
    ],
  };
  switchNameHandler = () => {
    this.setState({person: [
        { name: "Kobir Hossain", age: 28 },
        { name: "Md.Solaiman Khan", age: 28 },
        { name: "Md.Eliyas Hossain", age: 30 }
      ]})
  };
  changeNameHandler = (event) => {
    this.setState({person: [
        { name: "Kobir Hossain", age: 28 },
        { name: event.target.value, age: 28 },
        { name: "Md.Eliyas Hossain", age: 30 }
      ]})
  };
  render() {
    return (
      <div className="App">
        <h1>Hello! I am Kobir Hossain</h1>
        <p>I'm a Software Engineer.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          change={this.changeNameHandler}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
