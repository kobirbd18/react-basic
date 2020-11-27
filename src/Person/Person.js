import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="singlePerson">
        <h1>{this.props.name}</h1>
        <p>Age: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
