import React, { Component } from 'react';
import Login from '../../components/login/Login';

class LoginContainer extends Component {
    
    onSubmit = (data) => {
        console.log(data);
    }
    
    render() {
        return (
            <Login onSubmit={this.onSubmit} />
        );
    }
}

export default LoginContainer;