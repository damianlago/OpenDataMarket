import React, { Component } from 'react'
import DataVisualizer from '../dynamic/DataVisualizer'


class Index extends Component {
    constructor() {
        super()
        // this.state = {
        //     categories: []
        // }
    }

    // componentDidMount() {
    //     const baseUrl = 'http://18.157.253.218:3000/api/v1/retail/categories'
    //     fetch(baseUrl)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ categories: data }))
    // }

    render() {
        return (
            <>
                <div>
                    <h1>Title</h1>
                    <h3>Subtitle</h3>
                    <p>Description</p>
                    <DataVisualizer />
                </div>
            </>
        )
    }
}


export default Index