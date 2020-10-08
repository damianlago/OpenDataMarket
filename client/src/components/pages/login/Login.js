import React, { Component } from 'react'

import authService from '../../../service/auth.service'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log('Error:', { err }))
    }


    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label name="username">Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />

                    <label name="password">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />

                    <button type="submit">Log in</button>
                </form>
            </>
        )
    }
}

export default Login