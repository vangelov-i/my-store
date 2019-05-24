import React, { Component } from 'react';

import Input from './input';

class RegisterForm extends Component {

    render() {
        const { onRegister } = { ...this.props };

        return (
            <form>
                <Input
                    label='Username'
                    value={null}
                    onChange={e => console.log(e)}
                    autoComplete='username'
                />

                <Input
                    label='Email'
                    type='email'
                    value={null}
                    onChange={e => console.log(e)}
                    autoComplete='username'
                />


                <Input
                    label='Password'
                    type='password'
                    value={null}
                    onChange={e => console.log(e)}
                    autoComplete='new-password'
                />

                <Input
                    label='Repeat password'
                    type='password'
                    value={null}
                    onChange={e => console.log(e)}
                    autoComplete='new-password'
                />

                <Input
                    label='I accept the terms and conditions'
                    value={false}
                    type='checkbox'
                    onChange={e => console.log(e)}
                />

                <button onClick={onRegister}>Register</button>
            </form>
        );
    }
}

export default RegisterForm;