import React, { Component } from 'react'
import Filter from './Filter'
import Graphs from './Graphs'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Supermarkets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
            graphValue: "",
            supermarket: "",
            categories: [],
            category: "",
            products: [],
            product: "",
            productArr: []
        }
        this.apiData = []
        this.handleGraph = this.handleGraph.bind(this)
        this.handleSupermarketChange = this.handleSupermarketChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
    }

    fetchData() {
        fetch("/api/v1/retail/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    this.apiData = result;
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
            )
    }

    fetchProducts() {
        const res = fetch("/api/v1/retail/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                supermarket: this.state.supermarket,
                category: this.state.category,

            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    products: data,
                });
            })
        return res
    }

    fetchProductArr() {
        const res = fetch("/api/v1/retail/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                supermarket: this.state.supermarket,
                category: this.state.category,
                name: this.state.product
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    productArr: data,
                });
            })
        return res
    }

    getSupermarkets(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    getCategories(supermarket) {
        const categoriesList = this.apiData.filter((obj, index) => obj.supermarket === supermarket)
        this.setState({
            categories: categoriesList
        })
        return categoriesList
    }


    handleGraph(e) {
        this.setState({
            graphValue: e.target.value
        })
    }
    handleSupermarketChange(e) {
        this.setState({
            supermarket: e.target.value
        });
        this.getCategories(e.target.value)
    }
    handleCategoryChange(e) {
        this.setState({
            category: e.target.value
        });
    }
    handleProductChange(e) {
        this.setState({
            product: e.target.value
        });
    }


    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(preProps, prevState) {
        if (this.state.category !== prevState.category) {
            this.fetchProducts();
        }
        if (this.state.product !== prevState.product) {
            this.fetchProductArr();
        }
    }

    render() {
        const supermarkets = this.getSupermarkets(this.apiData, 'supermarket')
        const carrefourCat = this.apiData.filter((obj, index) => obj.supermarket === 'carrefour-es')
        const diaCat = this.apiData.filter((obj, index) => obj.supermarket === 'dia-es')
        const mercadonaCat = this.apiData.filter((obj, index) => obj.supermarket === 'mercadona-es')
        const categoriesLength = this.state.categories.map(elm => { return { "name": elm.category, loc: elm.category.length } })
        const productsPrices = this.state.products.map(elm => { return { "x": elm.name, "y": elm.price } })
        return (
            <>
                <Container className="mainWrapper">
                    <Row>
                        <Col md={4}>
                            <Filter handleGraph={this.handleGraph} graphValue={this.state.graphValue} handleSupermarketChange={this.handleSupermarketChange} supermarkets={supermarkets} supermarket={this.state.supermarket} handleCategoryChange={this.handleCategoryChange} categories={this.state.categories} category={this.state.category} handleProductChange={this.handleProductChange} products={this.state.products} product={this.state.product} productArr={this.state.productArr} />
                        </Col>
                        <Col md={8}>
                            <Graphs graphValue={this.state.graphValue} supermarket={this.state.supermarket} category={this.state.category} categories={this.state.categories} carrefourCat={carrefourCat} diaCat={diaCat} mercadonaCat={mercadonaCat} products={this.state.products} categoriesLength={categoriesLength} productsPrices={productsPrices} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Supermarkets