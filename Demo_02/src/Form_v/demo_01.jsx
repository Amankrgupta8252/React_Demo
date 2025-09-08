import React, { Component } from 'react';

export default class Demo01 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            emailErr: '',
            passwordErr: ''
        };
    }

    valid() {
        let emailErr = '';
        let passwordErr = '';
        let isValid = true;

        if (!this.state.email.includes('@')) {
            emailErr = 'Invalid Email';
            isValid = false;
        }
        if (this.state.password.length < 5) {
            passwordErr = 'Password must be at least 5 characters long';
            isValid = false;
        }

        this.setState({ emailErr, passwordErr });
        return isValid;
    }

    submit() {
        if (this.valid()) {
            alert('Form submitted successfully');
        }
    }

    render() {
        return (
            <div>
                <h1>Form Validation</h1>
                <br /><br />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <br /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <br />
                <p style={{ color: 'red' }}>{this.state.emailErr}</p>
                <br /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => this.setState({ password: e.target.value })}
                />
                <br />
                <p style={{ color: 'red' }}>{this.state.passwordErr}</p>
                <br /><br />
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}
