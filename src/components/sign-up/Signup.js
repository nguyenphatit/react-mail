import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './Signup.scss';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            birdthday: '',
            email: '',
            password: '',
            phone: '',
            address: ''
        }
    }
    
    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Paper className="Signup">
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <form onSubmit={this.onSubmit}>
                            <Grid item xs container direction="column" className="Signup__content" spacing={16}>
                                <Grid item xs>
                                    <Typography variant="display2" align="center" gutterBottom>
                                        Sign up
                                    </Typography>
                                    <TextField
                                        id="firstname"
                                        label="Firstname"
                                        margin="normal"
                                        className="form-control"
                                        name="firstname"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="lastname"
                                        label="Lastname"
                                        margin="normal"
                                        className="form-control"
                                        name="lastname"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        className="form-control"
                                        name="birdthday"
                                        value={this.state.birdthday}
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="email"
                                        label="Email"
                                        margin="normal"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        margin="normal"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        margin="normal"
                                        className="form-control"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="address"
                                        label="Address"
                                        multiline
                                        rowsMax="4"
                                        className="form-control"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </Grid>
                            <div align="right" className="Signup__footer">
                                <NavLink className="link" to='/login'>Login now!</NavLink>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default Signup;