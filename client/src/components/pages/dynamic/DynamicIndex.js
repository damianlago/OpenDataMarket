import React, { Component } from 'react'
import SupermarketFilter from './filters/SupermarketFltr'
import Default from './filters/Default'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DynamicIndex extends Component {
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

                            {/* add message for users before render filters */}

                            {(!this.state.value) && <Default />}
                            {(this.state.value === '1') && <SupermarketFilter />}

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }


    //             <select value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }}>
    //                 <option value='0' disabled>Select Data Source</option>
    //                 {
    //                     ['Supermarkets producst and categories', 2].map((i, j) => {
    //                         return <option key={i} value={i}>{i}</option>
    //                     })
    //                 }
    //             </select>
}

export default DynamicIndex