import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="Login__content">
                    <form>
                        <Typography variant="display2" gutterBottom>
                            Login
                        </Typography>
                        <div className="form-group">
                            <label htmlFor="email"><Typography gutterBottom noWrap>Email:</Typography></label>
                            <input type="email" id="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><Typography gutterBottom noWrap>Password:</Typography></label>
                            <input type="password" id="password" className="form-control" placeholder="Enter password" required />
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