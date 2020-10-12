import React, { Component } from 'react'
import Supermarkets from './filters/Supermarkets'
import Default from './Default'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class DataSources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <>
                <Container className="justify-content-center">
                    <Row className="justify-content-center">
                        <Col md={{ span: 5 }}>

                            <Form.Control as="select" onChange={this.handleDropdownChange} >
                                <option value="0">Choose Data Source</option>
                                <option value="1">Supermarket Products and Prices</option>
                            </Form.Control>

                            {(!this.state.value) && <Default />} {/* add message for users before render filters */}

                            {(this.state.value === '1') && <Supermarkets />}

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


export default DataSources