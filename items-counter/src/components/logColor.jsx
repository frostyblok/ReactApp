import React, { Component } from 'react';
import AddColorForm from './color';
import Clock from './clock';

class LogColor extends Component {
    state = {
        date: new Date(),
        isToggle: true
      };
      componentDidMount = () => {
        this.timerId = setInterval(() => this.tick(), 1000);
      };
      componentWillUnmount = () => {
        clearInterval(this.timerId);
      };
      tick = () => {
        this.setState({ date: new Date() });
      };
      handleClick = (e) => {
        e.preventDefault();
        alert(new Date());
      };
      handleToggle = (e) => {
        e.preventDefault();
        this.setState({isToggle: !this.state.isToggle});
      }
    logColor = (title, color) => {
        console.log(`Color title: ${title} | Color: ${color}`);
    }
    render() {
        return (
            <div>
                <AddColorForm showColor={this.logColor} />
                <Clock 
                    date={this.state.date}
                    onClick={this.handleClick}
                    onToggle={this.handleToggle}
                    dummyToggle={this.state.isToggle}
                    />
            </div>
        );
    }
}

export default LogColor;