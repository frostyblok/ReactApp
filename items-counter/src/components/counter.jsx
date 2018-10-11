import React, { Component } from 'react';

class Counter extends Component {
  state = {  
    count: 0,
    tags: ['Onions', 'Tomatoes', 'Fish']
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
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
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
        <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;