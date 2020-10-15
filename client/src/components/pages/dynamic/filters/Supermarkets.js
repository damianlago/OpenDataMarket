import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { ResponsiveLine } from '@nivo/line'


import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            product: "",
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
                'Accept': 'application/json'

            },
            body: JSON.stringify({
                supermarket: this.state.supermarket,
                category: this.state.category
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

    componentDidUpdate(prevState) {
        if (this.state.category !== prevState.category) {
            this.fetchProducts();
        }
    }


    render() {
        const supermarkets = this.getSupermarkets(this.apiData, 'supermarket')
        const carrefourCat = this.apiData.filter((obj, index) => obj.supermarket === 'carrefour-es')
        const diaCat = this.apiData.filter((obj, index) => obj.supermarket === 'dia-es')
        const mercadonaCat = this.apiData.filter((obj, index) => obj.supermarket === 'mercadona-es')

        const middelPrice = this.state.products.forEach((element, index, array) => {
            return element.price

        })

        console.log(middelPrice)
        return (
            <>
                <Form.Control className="filters" as="select" onChange={this.handleSupermarketChange} >
                    <option value="0">Choose Supermarket</option>
                    {supermarkets.map(elm => (
                        <option key={elm.supermarket} value={elm.supermarket}>
                            {elm.supermarket}
                        </option>
                    ))}
                </Form.Control>

                {
                    (this.state.supermarket) &&
                    <Form.Control className="filters" as="select" onChange={this.handleCategoryChange} >
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
                    <Form.Control className="filters" as="select" onChange={this.handleProductChange}>
                        <option value="0">Choose Product</option>
                        {this.state.products.map(elm => (
                            <option key={elm.id} value={elm.name}>
                                {elm.name}
                            </option>
                        ))}
                    </Form.Control>
                }

                {/* <div style={{ height: 500 }}>
                    <ResponsiveLine
                        data={[
                            {
                                "id": "Category",
                                "data": [
                                    {
                                        "x": "Product1",
                                        "y": 5
                                    },
                                    {
                                        "x": "Product2",
                                        "y": 15
                                    },
                                    {
                                        "x": "Product3",
                                        "y": 3
                                    }
                                ]
                            }
                        ]}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Products',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Prices',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        colors={{ scheme: 'nivo' }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div> */}

                {
                    (this.state.supermarket) && (!this.state.category) &&
                    <div className="staticGraphs" style={{ height: 400, width: 400 }}>
                        <ResponsiveBar
                            data={[
                                {
                                    "supermarket": this.state.supermarket,
                                    "categories": this.state.categories.length,
                                }
                            ]}
                            keys={['categories']}
                            indexBy='supermarket'
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Supermarket',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Categories Number',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'categories'
                                    },
                                    id: 'lines'
                                }
                            ]}
                        />
                    </div>
                }

                {
                    (this.state.category) &&
                    <div style={{ height: 500 }}>
                        <ResponsiveBar
                            data={[
                                {
                                    "category": this.state.category,
                                    "products": this.state.products.length
                                }
                            ]}
                            keys={['products']}
                            indexBy={'category'}
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'products'
                                    },
                                    id: 'dots'
                                }
                            ]}
                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'country',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Products Number',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                }

                {/* {
                    <div style={{ height: 500 }}>
                        <ResponsiveBar
                            data={[
                                {
                                    "supermarket": "Carrefour",
                                    "categories": carrefourCat.length,
                                },
                                {
                                    "supermarket": "Dia",
                                    "categories": diaCat.length,
                                },
                                {
                                    "supermarket": "Mercadona",
                                    "categories": mercadonaCat.length,
                                }
                            ]}
                            keys={['categories']}
                            indexBy='supermarket'
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'supermarket',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Categories Number',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'categories'
                                    },
                                    id: 'lines'
                                }
                            ]}
                        />
                    </div>
                },
                {
                    < div style={{ height: 500 }}>
                        <ResponsiveBubble
                            root={
                                {
                                    "name": "Supermarkets",
                                    "children": [
                                        {
                                            "name": "Carrefour",
                                            "loc": carrefourCat.length.toString()
                                        },
                                        {
                                            "name": "Dia",
                                            "loc": 573
                                        },
                                        {
                                            "name": "Mercadona",
                                            "loc": mercadonaCat.length.toString()
                                        }
                                    ]
                                }
                            }
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            identity="name"
                            value="loc"
                            colors={{ scheme: 'nivo' }}
                            padding={6}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                            borderWidth={2}
                            borderColor={{ from: 'color' }}
                            defs={[
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'none',
                                    color: 'inherit',
                                    rotation: -45,
                                    lineWidth: 5,
                                    spacing: 8
                                }
                            ]}
                            fill={[{ match: { depth: 1 }, id: 'lines' }]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={12}
                        />
                    </div>
                } */}
            </>
        )
    }

}


export default Supermarkets
