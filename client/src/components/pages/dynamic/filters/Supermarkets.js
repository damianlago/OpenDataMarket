import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
// import { ResponsiveBar } from '@nivo/bar'

class Supermarkets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
            supermarket: "",
            category: "",
            products: []
        }
        this.apiData = []
        this.handleSupermarketChange = this.handleSupermarketChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

    getSupermarkets(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    getCategories(supermarket) {
        return this.apiData.filter(function (obj, index) {
            return obj.supermarket === supermarket;
        })
    }

    handleSupermarketChange(e) {
        this.setState({
            supermarket: e.target.value
        });
    }

    handleCategoryChange(e) {
        this.setState({
            category: e.target.value
        });
    }

    fetchProducts() {
        const res = fetch("/api/v1/retail/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                supermarket: 'carrefour-es',
                category: 'el_mercado_carniceria_preparados_y_arreglos_de_carne',
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    products: data,
                });
            })
            .catch((err) => console.log("ERROR", err));
        return res
    }

    componentDidMount() {
        this.fetchData()
        this.fetchProducts()
    }

    render() {
        const supermarkets = this.getSupermarkets(this.apiData, 'supermarket')
        const categories = this.getCategories(this.state.supermarket)
        return (
            <>
                <Form.Control as="select" onChange={this.handleSupermarketChange} >
                    <option value="0">Choose Supermarket</option>
                    {supermarkets.map(elm => (
                        <option key={elm.supermarket} value={elm.supermarket}>
                            {elm.supermarket}
                        </option>
                    ))}
                </Form.Control>

                {/* {  < div style={{ height: 500 }}>
                    <ResponsiveBar
                        data={this.state.data}
                        // keys={'category'}
                        indexBy={this.state.data.map(elm => elm.supermarket)}
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: 'nivo' }} />
                </div>} */}

                {
                    (this.state.supermarket) &&
                    <Form.Control as="select" onChange={this.handleCategoryChange} >
                        <option value="0">Choose Category</option>
                        {categories.map(elm => (
                            <option key={elm.category} value={elm.category}>
                                {elm.category}
                            </option>
                        ))}
                    </Form.Control>
                }
                {
                    (this.state.products) &&
                    <Form.Control as="select">
                        <option value="0">Choose Product</option>
                        {this.state.products.map(elm => (
                            <option key={elm.id} value={elm.name}>
                                {elm.name}
                            </option>
                        ))}
                    </Form.Control>
                }
            </>
        )
    }

}


export default Supermarkets
