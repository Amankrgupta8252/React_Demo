import React, { Component } from 'react'

export default class login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLogin: false
        }
    }

    isLogin() {
        fetch('', {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json(), then((result) => {
                console.log(result)
                localStorage.setItem('login', json.stringify({
                    isLogin: true,
                }))

            })
        })
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <input type="text" placeholder='username' onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <br />
                <br />
                <input type="password" placeholder='password' onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <br />
                <br />
                <button onClick={() => { this.isLogin() }}>Login</button>
            </div>
        )
    }
}

