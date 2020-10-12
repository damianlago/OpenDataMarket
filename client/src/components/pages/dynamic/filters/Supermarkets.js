import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'


class Supermarkets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoaded: false,
            supermarket: "",
            category: ""
        }
        this.apiData = []
        this.handleSupermarketChange = this.handleSupermarketChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    fetchData() {
        fetch("http://18.157.253.218:3000/api/v1/retail/categories")
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


    // fetchProducts() {
    //     const res = fetch("http://18.157.253.218:3000/api/v1/retail/products", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({
    //             'supermarket': 'mercadona-es',
    //             'category': 'aceite_especias_y_salsas_aceite_vinagre_y_sal'
    //         })
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({
    //                 products: data
    //             })
    //         })
    //     return res
    // }

    componentDidMount() {
        this.fetchData()
        // this.fetchProducts()
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

                {(this.state.supermarket) &&
                    <Form.Control as="select" onChange={this.handleCategoryChange} >
                        <option value="0">Choose Category</option>
                        {categories.map(elm => (
                            <option key={elm.category} value={elm.category}>
                                {elm.category}
                            </option>
                        ))}
                    </Form.Control>
                }
            </>
        )
    }

}


export default Supermarkets
