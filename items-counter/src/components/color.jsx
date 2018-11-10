import React, { Component } from 'react';

class AddColorForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.submit = this.submit.bind(this);
    // }
    submit = (e) => {
        const { _title, _color } = this.refs;
        e.preventDefault();
        alert(`New color ${_title.value} ${_color.value}`);
        _title.value = '';
        _color.value = '#000000';
    };
    logColor = (e) => {
        e.preventDefault();
        const { _title, _color } = this.refs;
        console.log(`Color title: ${_title.value} | Color: ${_color.value}`);
    }
    render() { 
        return ( 
            <form onSubmit={this.logColor}>
                <input ref="_title"
                        type="text"
                        placeholder="Color Title..." required/>
                <input ref="_color"
                        type="color" required/>
                <button>Add</button>
            </form>
         );
    }
}
 
export default AddColorForm;