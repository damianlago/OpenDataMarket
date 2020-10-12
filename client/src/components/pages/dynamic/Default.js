import React, { Component } from 'react'
import Graphs from './filters/graphs/Graphs'

class Default extends Component {
    render() {
        return (
            <>
                <p>Test: Choose parameters for rendering graphs</p>
                <Graphs />
            </>
        )
    }
}

export default Default