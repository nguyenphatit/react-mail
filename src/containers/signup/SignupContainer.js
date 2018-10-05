import React, { Component } from 'react';
import Signup from '../../components/sign-up/Signup';
import { connect } from 'react-redux';
import { actionSignUpReq } from './../../actions/index';

class SignupContainer extends Component {

    onSubmit = data => {
        this.props.actionSignUp(data);
    }

    render() {
        return (
            <Signup onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProp = state => {
    // console.log(state.message)
    return {
        message: state.message
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        actionSignUp: user => {
            dispatch(actionSignUpReq(user))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(SignupContainer);