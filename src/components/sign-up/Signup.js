import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './Signup.scss';

class Signup extends Component {
    render() {
        return (
            // <div className="Signup">
            //     <div className="Signup__content">
            //         <form>
            //             <Typography variant="display2" gutterBottom>
            //                 Sign up
            //             </Typography>

            //         </form>
            //         <div className="Signup__footer">
            //             <NavLink className="link" to='/signup'>Registry now!</NavLink>
            //         </div>
            //     </div>
            // </div>
            <Paper className="Signup">
                <Grid container spacing={16}>
                    <Grid item xs={12} sm container>
                        <form>
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
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="lastname"
                                        label="Lastname"
                                        margin="normal"
                                        className="form-control"
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        className="form-control"
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
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        margin="normal"
                                        className="form-control"
                                        variant="outlined"
                                        required={true}
                                    />
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        margin="normal"
                                        className="form-control"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="address"
                                        label="Address"
                                        multiline
                                        rowsMax="4"
                                        className="form-control"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span">
                                            Upload
                                            <CloudUploadIcon />
                                        </Button>
                                    </label>
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