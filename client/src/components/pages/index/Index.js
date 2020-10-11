import React, { Component } from 'react'
import DynamicIndex from '../dynamic/DynamicIndex'

import Container from 'react-bootstrap/esm/Container';


class Index extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Container style={{ textAlign: "center" }}>
                    <h1>Title</h1>
                    <h3>Subtitle</h3>
                    <p>Description</p>
                </Container>

                <DynamicIndex />
            </>
        )
    }
}


export default Index