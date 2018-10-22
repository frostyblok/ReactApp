import React, { Component } from "react";

class Value extends Component {
  state = {
    value: this.props.counter.value,
    id: this.props.id
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  /** Whenever you need to pass an argument to an even handler, you use a helper method like
  doHandleIncrement = () => {
    this.handleIncrement({id:1})
  }
  and you refrence the doHandleIncrement function.
  Or you simple pass an arrow function to the onClick attribute and call the event handler
  */
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Value;
