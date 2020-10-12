import React, { Component } from 'react'
import './Footer.css'

export default class extends Component {

    render() {
        return (
            <footer><p>{new Date().getFullYear()}&copy; Open Data Market</p></footer>
        )
    }
}