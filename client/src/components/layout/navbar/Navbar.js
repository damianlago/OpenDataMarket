import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import authService from './../../../service/auth.service'

export default class extends Component {

    constructor(props) {
        super(props)
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('Error!:', err))
    }

    render() {
        return (
            <>
                <Link to="/">Home</Link> <br></br>
                {!this.props.loggedInUser && <Link to="/signup">Register</Link>} <br></br>
                {!this.props.loggedInUser && <Link to="/login">Log in</Link>} <br></br>
                {this.props.loggedInUser && <Link onClick={this.logoutUser}>Log out</Link>}
            </>
        )
    }
}