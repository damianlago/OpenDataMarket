import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { ResponsiveBar } from '@nivo/bar'

class Supermarkets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
            supermarket: "",
            categories: [],
            category: "",
            products: [],
            product: ""
        }
        this.apiData = []
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
            .catch((err) => console.log("ERROR", err));
        return res
    }

    getSupermarkets(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    getCategories(supermarket) {
        console.log('entrooo')
        const test = this.apiData.filter(function (obj, index) {
            return obj.supermarket === supermarket;
        })
        console.log('test' + test)
        this.setState({
            categories: test
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

    handleProductChange(e) {
        this.setState({
            product: e.target.value
        });
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        console.log('categorias' + this.state.category)
        if (this.state.category !== prevProps.category) {
            this.fetchProducts();
        }
    }

    // categoryProducts() {
    //     console.log("entro")
    //     if (this.state.category && this.state.supermarket) {
    //         this.fetchProducts()
    //     }
    // }

    render() {
        const supermarkets = this.getSupermarkets(this.apiData, 'supermarket')
        // const categories = this.getCategories(this.state.supermarket)
        console.log(this.state.supermarket)
        // console.log(this.state.category)
        console.log(this.state.products)
        console.log(this.state.product)

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

                {
                    (this.state.supermarket) &&
                    <Form.Control as="select" onClick={this.getCategories(this.state.supermarket)} onChange={this.handleCategoryChange} >
                        <option value="0">Choose Category</option>
                        {this.state.categories.map(elm => (
                            <option key={elm.category} value={elm.category}>
                                {elm.category}
                            </option>
                        ))}
                    </Form.Control>
                }
                {
                    (this.state.category) &&
                    <Form.Control as="select" onChange={this.handleProductChange}>
                        <option value="0">Choose Product</option>
                        {this.state.products.map(elm => (
                            <option key={elm.id} value={elm.name}>
                                {elm.name}
                            </option>
                        ))}
                    </Form.Control>
                }

                {/* 
                {  <div style={{ height: 500 }}>
                    <ResponsiveBar
                        data={[
                            {
                                "supermarket": "test",
                                "categories": categories.length,
                            }
                        ]}
                        keys={['categories']}
                        indexBy="supermarket"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        colors={{ scheme: 'nivo' }} />
                </div>
                } */}
            </>
        )
    }

}


export default Supermarkets
