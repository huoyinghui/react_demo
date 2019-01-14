import React, { Component } from 'react';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcom extends Component {
    render() {
        return (
            <h1>Hello {this.props.name}, welcom to react</h1>
        );
    }
}

export default Welcom;