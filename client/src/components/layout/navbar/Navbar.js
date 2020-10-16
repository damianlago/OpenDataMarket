import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'

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
                <Navbar bg="light">
                    <NavbarBrand>
                        <Link to="/">Open Data Market</Link>
                    </NavbarBrand>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            {/* {!this.props.loggedInUser && <Link to="/signup">Register</Link>} */}
                            {!this.props.loggedInUser && <Link to="/login">Log in</Link>}
                            {this.props.loggedInUser && <Link onClick={this.logoutUser}>Log out</Link>}
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </>
        )
    }
}