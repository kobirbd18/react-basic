import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    const style = {
      color: "red",
      float: "right",
      fontWeight: 'bold',
      cursor:'pointer',
    };

    return (
      <div className="singlePerson">
        <span style={style} onClick={this.props.delete}>X</span>
        <h1>{this.props.name}</h1>
        <p>Age: {this.props.age}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
