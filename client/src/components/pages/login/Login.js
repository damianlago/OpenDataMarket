import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
                <Container>
                    <main>
                        <Row className="justify-content-center">
                            <Col md={{ span: 5 }}>
                                <Form onSubmit={this.handleFormSubmit}>

                                    <Form.Group>
                                        <Form.Label name="username">Username:</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label name="password">Password:</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Accept terms and conditions." />
                                    </Form.Group>

                                    <Button variant="dark" type="submit">Log in</Button>

                                </Form>
                            </Col>
                        </Row>
                    </main>
                </Container>
            </>
        )
    }
}

export default Login