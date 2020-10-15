import React, { Component } from 'react'
import Supermarkets from './filters/Supermarkets'
import Default from './Default'

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class DataSources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            showComponent: false
        };

        this.showComponent = this.showComponent.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
    }

    handleDropdownChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    showComponent(e) {
        this.setState({ showComponent: true });
    }

    render() {
        console.log(this.state.showComponent)
        return (
            <>

                <Form.Control className="filters" as="select" onChange={this.handleDropdownChange} >
                    <option value="0">Choose Data Source</option>
                    <option value="1">Supermarket Products and Prices</option>
                </Form.Control>
                {
                    (!this.state.value) && <Default />
                }
                {
                    (this.state.value === '1') && <Supermarkets />
                }

                {/* <Button variant="primary" onClick={this.showComponent}>Supermarkets</Button>
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary" disabled>Disabled</Button> */}
                {this.state.showComponent ? <Supermarkets /> : null}
            </>
        )
    }
}


export default DataSources