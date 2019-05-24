import React, { Component } from 'react';

class Input extends Component {

    render() {
        const {
            label,
        } = { ...this.props };

        return (
            <label>
                {label ? `${label}: ` : null}
                <input {...this.props}></input>
            </label>
        );
    }
}

Input.defaultProps = {
    type: 'text',
};

export default Input;