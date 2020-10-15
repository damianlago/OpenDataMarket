import React, { Component } from 'react'
import DataSources from '../dynamic/DataSources'

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Index extends Component {
    render() {
        return (
            <>
                <Container>
                    {/* <Container style={{ textAlign: "center" }}>
                        <h1>Title</h1>
                        <h3>Subtitle</h3>
                        <p>Description</p>
                    </Container> */}
                    <DataSources />
                </Container>
            </>
        )
    }
}


export default Index