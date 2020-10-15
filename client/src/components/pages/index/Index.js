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
                            <h1>OpenData Market</h1>
                            <h3>Lore ipsum text lore ipsum text lore...</h3>
                            <Form.Control className="filters" as="select" onChange={this.handleDropdownChange} >
                                <option value="0">Choose Data Source</option>
                                <option value="1">Supermarket Products and Prices</option>
                            </Form.Control>

                            {
                                (this.state.value === '1') && <Supermarkets />
                            }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Index