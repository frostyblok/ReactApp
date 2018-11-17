import React, { Component } from "react";

class Clock extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.date.toLocaleTimeString()}.</h3>
        <button onClick={this.props.onClick}>Alert date</button>
        <button onClick={this.props.onToggle}>{this.props.dummyToggle ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default Clock;
