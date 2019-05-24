import React, { Component } from 'react';

import Input from './input';

class LoginForm extends Component {

    render() {
        const {
            onLogin,
        } = { ...this.props };

        return (
            <form>
                <Input
                    label='Username'
                    value={null}
                    onChange={e => console.log(e)}
                    autoComplete='username'
                />

                <Input
                    label='Password'
                    value={null}
                    type='password'
                    onChange={e => console.log(e)}
                    autoComplete='current-password'
                />

                <Input
                    label='Remember me'
                    type='checkbox'
                    value={false}
                />

                <button onClick={onLogin}>Login</button>
            </form>
        );
    }
}

export default LoginForm;