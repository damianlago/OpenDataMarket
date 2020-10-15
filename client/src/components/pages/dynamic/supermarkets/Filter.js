import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Filter = ({ handleSupermarketChange, supermarkets, supermarket, handleCategoryChange, categories, category, handleProductChange, products }) => {
    return (
        <>
            <Form.Control className="filtersSelect" as="select" onChange={handleSupermarketChange} >
                <option value="0">Choose Supermarket</option>
                {supermarkets.map(elm => (
                    <option key={elm.supermarket} value={elm.supermarket}>
                        {elm.supermarket}
                    </option>
                ))}
            </Form.Control>

            {
                (supermarket) &&
                <Form.Control className="filtersSelect" as="select" onChange={handleCategoryChange} >
                    <option value="0">Choose Category</option>
                    {categories.map(elm => (
                        <option key={elm.category} value={elm.category}>
                            {elm.category}
                        </option>
                    ))}
                </Form.Control>
            }

            {
                (category) &&
                <Form.Control className="filtersSelect" as="select" onChange={handleProductChange}>
                    <option value="0">Choose Product</option>
                    {products.map(elm => (
                        <option key={elm.id} value={elm.name}>
                            {elm.name}
                        </option>
                    ))}
                </Form.Control>
            }
        </>
    )
}


export default Filter