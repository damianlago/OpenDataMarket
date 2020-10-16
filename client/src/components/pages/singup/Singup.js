import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
            .catch(err => console.log('Error:', { err }))
    }


    render() {

        return (
            <>
                <h1>Register</h1>
                <Container className="login">
                    <Row className="justify-content-center">
                        <Col md={{ span: 5 }}>
                            <Form onSubmit={this.handleFormSubmit}>

                                <Form.Group>
                                    <Form.Label name="username">Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label name="password">Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                                </Form.Group>
                                <Button className="loginBtn" variant="primary" type="submit">Log in</Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Signup