import React, { Component } from 'react'
import CategoryCard from './CategoryCard.js'
import categoryService from '../../service/categories.service'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
        this.categoryService = new categoryService()
    }

    // componentDidMount() {

    //     const url = 'http://18.157.253.218:3000/api/v1/retail/categories'
    //     fetch(url)
    //         .then((response) => response.json)
    //         .then((data) => this.setState({ categories: data }))
    // }

    render() {
        return (
            <>
                <h1>Categories List Test</h1>
                {this.state.categories.map(elm => <CategoryCard key={elm._id} {...elm} />)}
            </>
        )
    }
}


export default Index