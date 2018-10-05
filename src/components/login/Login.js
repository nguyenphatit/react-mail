import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    
    render() {
        return (
            <div className="Login">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="Login__content">
                    <form onSubmit={this.onSubmit}>
                        <Typography variant="display2" gutterBottom>
                            Login
                        </Typography>
                        <div className="form-group">
                            <label htmlFor="email"><Typography gutterBottom noWrap>Email:</Typography></label>
                            <input 
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><Typography gutterBottom noWrap>Password:</Typography></label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn-login">Login</button>
                        </div>
                    </form>
                    <div className="Login__footer">
                        <NavLink className="link" to='/signup'>Registry now!</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;