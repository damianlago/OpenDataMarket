import React, { Component } from 'react'
import authService from '../../../service/auth.service'

class Signup extends Component {
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
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log('Erroooooor:', { err }))
    }


    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label name="username">Nombre de usuario</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />

                    <label name="password">Contraseña</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />

                    <button type="submit">Register</button>
                </form>
            </>
        )
    }
}

export default Signup