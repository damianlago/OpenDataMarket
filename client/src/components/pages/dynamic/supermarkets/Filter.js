import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Filter = ({ handleGraph, handleSupermarketChange, supermarkets, supermarket, handleCategoryChange, categories, category, handleProductChange, products, product, productArr }) => {
    console.log(supermarket)
    return (
        <>
            <Form.Control className="mt-3 mb-3 selectStyle" as="select" onChange={handleSupermarketChange} >
                <option value="0">Choose Supermarket &hellip;</option>
                {supermarkets.map(elm => (
                    <option key={elm.supermarket} value={elm.supermarket}>
                        {elm.supermarket}
                    </option>
                ))}
            </Form.Control>

            {
                (supermarket) &&
                <Form.Control className="mt-3 mb-3 selectStyle" as="select" onChange={handleCategoryChange} >
                    <option value="0">Choose Category &hellip;</option>
                    {categories.map(elm => (
                        <option key={elm.category} value={elm.category}>
                            {elm.category}
                        </option>
                    ))}
                </Form.Control>
            }

            {
                (supermarket && category) &&
                <Form.Control className="productStyle" as="select" onChange={handleProductChange}>
                    <option value="0">Choose Product &hellip;</option>
                    {products.map(elm => (
                        <option key={elm.id} value={elm.name}>
                            {elm.name}
                        </option>
                    ))}
                </Form.Control>
            }

            {/* <Form.Control className="graphStyle" as="select" onChange={handleGraph}>
                <option value="0">Render Specific Graph &hellip;</option>
                <option value="1">Supermarket Category Length Bar</option>
                <option value="2">Supermarket Categories Lengths TreeMap</option>
                <option value="3">Supermarket Product Length Bar</option>
                <option value="4">Supermarket Products & Prices Line</option>
                <option value="5">Supermarkets Categories Buble</option>
            </Form.Control> */}

            {
                (productArr[0]) && (
                    <Card className="mt-3" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{productArr[0].name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{productArr[0].description}</Card.Subtitle>
                            <Card.Text>
                                Reference Price: {productArr[0].reference_price}{productArr[0].reference_unit}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    )
}


export default Filter