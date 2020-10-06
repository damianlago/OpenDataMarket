import React, { Component } from 'react'



class Index extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const baseUrl = 'http://18.157.253.218:3000/api/v1/retail/categories'
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ categories: data }))
    }

    render() {
        console.log(this.state.categories)
        return (
            <>
                <h1>Index</h1>
            </>
        )
    }
}


export default Index