import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveTreeMap } from '@nivo/treemap'
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from '@nivo/pie'


import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Graphs = ({
    supermarket,
    category,
    categories,
    carrefourCat,
    diaCat,
    mercadonaCat,
    products,
    productsPrices,
    categoriesLength
}) => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <Row className="mt-3">
                        <Col md={6}>
                            {
                                (supermarket && !category) &&
                                <Container className="staticGraphs" style={{ height: 500, width: 400 }}>
                                    <ResponsiveBar
                                        data={[
                                            {
                                                supermarket: supermarket,
                                                categories: categories.length,
                                            },
                                        ]}
                                        keys={["categories"]}
                                        indexBy="supermarket"
                                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                        padding={0.3}
                                        colors={{ scheme: "nivo" }}
                                        legends={[
                                            {
                                                dataFrom: "keys",
                                                anchor: "bottom-right",
                                                direction: "column",
                                                justify: false,
                                                translateX: 120,
                                                translateY: 0,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: "left-to-right",
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: "hover",
                                                        style: {
                                                            itemOpacity: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                        ]}
                                        axisBottom={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: "Supermarket",
                                            legendPosition: "middle",
                                            legendOffset: 32,
                                        }}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: "Categories Number",
                                            legendPosition: "middle",
                                            legendOffset: -40,
                                        }}
                                        defs={[
                                            {
                                                id: "dots",
                                                type: "patternDots",
                                                background: "inherit",
                                                color: "#38bcb2",
                                                size: 4,
                                                padding: 1,
                                                stagger: true,
                                            },
                                            {
                                                id: "lines",
                                                type: "patternLines",
                                                background: "inherit",
                                                color: "#eed312",
                                                rotation: -45,
                                                lineWidth: 6,
                                                spacing: 10,
                                            },
                                        ]}
                                        fill={[
                                            {
                                                match: {
                                                    id: "categories",
                                                },
                                                id: "lines",
                                            },
                                        ]}
                                    />
                                </Container>
                            }
                        </Col>

                        <Col md={6}>
                            {
                                (supermarket && !category) &&
                                <Container className="mt-3" style={{ height: 500, width: 400 }}>
                                    <ResponsiveTreeMap
                                        root={
                                            {
                                                "name": supermarket,
                                                "children": categoriesLength
                                            }
                                        }

                                        identity="name"
                                        value="loc"
                                        innerPadding={3}
                                        outerPadding={3}
                                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                        label="loc"
                                        labelFormat=".0s"
                                        labelSkipSize={12}
                                        labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
                                        colors={{ scheme: 'nivo' }}
                                        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                                        animate={true}
                                        motionStiffness={90}
                                        motionDamping={11}
                                    />
                                </Container>
                            }
                        </Col>

                        <Col md={6}>
                            {
                                (supermarket && category) &&
                                <Container style={{ height: 500, width: 350 }}>
                                    <ResponsiveBar
                                        data={[
                                            {
                                                category: category,
                                                products: products.length,
                                            },
                                        ]}
                                        keys={["products"]}
                                        indexBy={"category"}
                                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                        padding={0.3}
                                        colors={{ scheme: "nivo" }}
                                        defs={[
                                            {
                                                id: "dots",
                                                type: "patternDots",
                                                background: "inherit",
                                                color: "#38bcb2",
                                                size: 4,
                                                padding: 1,
                                                stagger: true,
                                            },
                                            {
                                                id: "lines",
                                                type: "patternLines",
                                                background: "inherit",
                                                color: "#eed312",
                                                rotation: -45,
                                                lineWidth: 6,
                                                spacing: 10,
                                            },
                                        ]}
                                        fill={[
                                            {
                                                match: {
                                                    id: "products",
                                                },
                                                id: "dots",
                                            },
                                        ]}
                                        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: "Supermarket",
                                            legendPosition: "middle",
                                            legendOffset: 32,
                                        }}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: "Products Number",
                                            legendPosition: "middle",
                                            legendOffset: -40,
                                        }}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                                        legends={[
                                            {
                                                dataFrom: "keys",
                                                anchor: "bottom-right",
                                                direction: "column",
                                                justify: false,
                                                translateX: 120,
                                                translateY: 0,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: "left-to-right",
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: "hover",
                                                        style: {
                                                            itemOpacity: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                        ]}
                                        animate={true}
                                        motionStiffness={90}
                                        motionDamping={15}
                                    />
                                </Container>
                            }
                        </Col>
                        <Col md={6}>
                            {
                                (supermarket && category) &&
                                <Container style={{ height: 500, width: 500 }}>
                                    <ResponsiveLine
                                        data={[
                                            {
                                                id: category,
                                                data: productsPrices
                                            }
                                        ]}
                                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                        xScale={{ type: "point" }}
                                        yScale={{
                                            type: "linear",
                                            min: "auto",
                                            max: "auto",
                                            stacked: true,
                                            reverse: false,
                                        }}
                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={{
                                            orient: "bottom",
                                            tickSize: 3,
                                            tickPadding: 5,
                                            tickRotation: 90,
                                            legend: "",
                                            legendOffset: 36,
                                            legendPosition: "middle",
                                        }}
                                        axisLeft={{
                                            orient: "left",
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: "Prices",
                                            legendOffset: -40,
                                            legendPosition: "middle",
                                        }}
                                        colors={{ scheme: "nivo" }}
                                        pointSize={10}
                                        pointColor={{ theme: "background" }}
                                        pointBorderWidth={2}
                                        pointBorderColor={{ from: "serieColor" }}
                                        pointLabel="y"
                                        pointLabelYOffset={-12}
                                        useMesh={true}
                                        legends={[
                                            {
                                                anchor: "bottom-right",
                                                direction: "column",
                                                justify: false,
                                                translateX: 100,
                                                translateY: 0,
                                                itemsSpacing: 0,
                                                itemDirection: "left-to-right",
                                                itemWidth: 80,
                                                itemHeight: 20,
                                                itemOpacity: 0.75,
                                                symbolSize: 12,
                                                symbolShape: "circle",
                                                symbolBorderColor: "rgba(0, 0, 0, .5)",
                                                effects: [
                                                    {
                                                        on: "hover",
                                                        style: {
                                                            itemBackground: "rgba(0, 0, 0, .03)",
                                                            itemOpacity: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                        ]}
                                    />
                                </Container>
                            }

                        </Col>
                    </Row>
                </Col>
                <Col md={12}>
                    {
                        (!supermarket && !category) &&
                        <Container style={{ height: 500, width: 600 }}>
                            <ResponsivePie
                                data={
                                    [
                                        {
                                            "id": "Carrefour",
                                            "label": "Carrefour",
                                            "value": carrefourCat.length,
                                        },
                                        {
                                            "id": "Dia",
                                            "label": "Dia",
                                            "value": diaCat.length,
                                        },
                                        {
                                            "id": "Mercadona",
                                            "label": "Mercadona",
                                            "value": mercadonaCat.length,
                                        },
                                    ]
                                }
                                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                                innerRadius={0.5}
                                padAngle={0.7}
                                cornerRadius={3}
                                colors={{ scheme: 'nivo' }}
                                borderWidth={1}
                                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                                radialLabelsSkipAngle={10}
                                radialLabelsTextXOffset={6}
                                radialLabelsTextColor="#333333"
                                radialLabelsLinkOffset={0}
                                radialLabelsLinkDiagonalLength={16}
                                radialLabelsLinkHorizontalLength={24}
                                radialLabelsLinkStrokeWidth={1}
                                radialLabelsLinkColor={{ from: 'color' }}
                                slicesLabelsSkipAngle={10}
                                slicesLabelsTextColor="#333333"
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: 'rgba(255, 255, 255, 0.3)',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: 'rgba(255, 255, 255, 0.3)',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                fill={[
                                    {
                                        match: {
                                            id: 'carrefour'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'dia'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'mercadona'
                                        },
                                        id: 'dots'
                                    }
                                ]}
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        translateY: 56,
                                        itemWidth: 100,
                                        itemHeight: 18,
                                        itemTextColor: '#999',
                                        symbolSize: 18,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </Container>
                    }
                </Col>

                {/* <Col md={6} className="staticGraph">
                    {
                        (!supermarket && !category) &&
                        <Container style={{ height: 500, width: 350 }}>
                            <ResponsiveBubble
                                root={{
                                    name: "test",
                                    children: [
                                        {
                                            name: "Dia",
                                            loc: 571,
                                        },
                                        {
                                            name: "Mercadona",
                                            loc: mercadonaCat.length.toString(),
                                        },
                                    ]
                                }}
                                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                identity="name"
                                value="loc"
                                colors={{ scheme: "nivo" }}
                                padding={6}
                                labelTextColor={{ from: "color", modifiers: [["darker", 0.8]] }}
                                borderWidth={2}
                                borderColor={{ from: "color" }}
                                defs={[
                                    {
                                        id: "lines",
                                        type: "patternLines",
                                        background: "none",
                                        color: "inherit",
                                        rotation: -45,
                                        lineWidth: 5,
                                        spacing: 8,
                                    },
                                ]}
                                fill={[{ match: { depth: 1 }, id: "lines" }]}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={12}
                            />
                        </Container>
                    }
                </Col> */}

                {/* <Col md={12}>
                    {
                        (!supermarket && !category) &&
                        <Container style={{ height: 500, width: 500 }}>
                            <ResponsiveLine
                                data={[
                                    {
                                        id: category,
                                        data: productsPrices
                                    }
                                ]}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                xScale={{ type: "point" }}
                                yScale={{
                                    type: "linear",
                                    min: "auto",
                                    max: "auto",
                                    stacked: true,
                                    reverse: false,
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    orient: "bottom",
                                    tickSize: 1,
                                    tickPadding: 5,
                                    tickRotation: 90,
                                    legend: "Products",
                                    legendOffset: 36,
                                    legendPosition: "middle",
                                }}
                                axisLeft={{
                                    orient: "left",
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: "Prices",
                                    legendOffset: -40,
                                    legendPosition: "middle",
                                }}
                                colors={{ scheme: "nivo" }}
                                pointSize={10}
                                pointColor={{ theme: "background" }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: "serieColor" }}
                                pointLabel="y"
                                pointLabelYOffset={-12}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: "bottom-right",
                                        direction: "column",
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: "left-to-right",
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: "circle",
                                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                                        effects: [
                                            {
                                                on: "hover",
                                                style: {
                                                    itemBackground: "rgba(0, 0, 0, .03)",
                                                    itemOpacity: 1,
                                                },
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Container>
                    }
                </Col> */}
            </Row>
        </>
    );
};


export default Graphs;
