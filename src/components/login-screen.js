import React, { Component } from 'react';

import LoginForm from './login-form';
import RegisterForm from './register-form';

class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            showRegisterForm: false,
            showLoginForm: true,
        };
    }

    handleRegister = e => {
        e.preventDefault();

        this.setState({
            showRegister: true,
            showLoginForm: false,
        });
    }

    render() {
        const {
            showLoginForm,
            showRegister
        } = { ...this.state };

        return (
            <>
                The login screen
                {showLoginForm ? <LoginForm /> : null}
                {showLoginForm ? <button onClick={this.handleRegister}>Register</button> : null}

                {showRegister ? <RegisterForm /> : null}
            </>
        );
    }
}

export default LoginScreen;