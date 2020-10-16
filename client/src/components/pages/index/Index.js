import React, { Component } from 'react'
import Supermarkets from '../dynamic/supermarkets/'


import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
    }

    handleDropdownChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <>
                <Container className="mainWrapper">
                    <Row>
                        <Col md={12}>
                            <h4>Information dashboard tool that analyzes and displays data in graphs.</h4>

                            <Form.Control className="datasources mt-3" as="select" onChange={this.handleDropdownChange} >
                                <option value="0">Supermarket Categories and Products &hellip;</option>
                                <option value="1" disabled>Data Sources..</option>
                            </Form.Control>

                            {
                                ((!this.state.value) || this.state.value === '0') && <Supermarkets />
                            }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Index