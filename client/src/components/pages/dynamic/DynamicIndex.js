import React, { Component } from 'react'
import SupermarketFilter from './filters/SupermarketFltr'
import Default from './filters/Default'


class DynamicIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        console.log(typeof (this.state.value))
        return (
            <>
                <select onChange={this.handleDropdownChange}>
                    <option value="0">Choose Data Source</option>
                    <option value="1">Supermarket Products and Prices</option>
                    <option value="2">...data sources</option>
                </select>

                {/* add message for users before render filters */}
                <div>Selected: {this.state.value}</div>
                {(!this.state.value) && <Default />}
                {(this.state.value === '1') && <SupermarketFilter />}
            </>
        );
    }



    // class DataSource extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             value: "0"
    //         }
    //         this.handleDropdownChange = this.handleDropdownChange.bind(this);
    //     }

    //     handleDropdownChange(e) {
    //         this.setState({ value: e.target.value });
    //     }

    //     render() {
    //         console.log(this.state.value)
    //         return (
    //             <>
    //                 <select value={this.state.value} onChange={this.handleDropdownChange}>
    //                     <option value="0" disabled>Choose Data Source</option>
    //                     <option value="1">Supermarket Products and Prices</option>
    //                     <option value="2" >...data sources</option>
    //                 </select>

    //                 {/* add message for users before render filters */}
    //                 <div>Selected: {this.state.value}</div>
    //                 {(this.setState.value === 1) ? <OneDS /> : null}

    //             </>
    //         );
    //     }



    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             value: '0'
    //         };
    //     }

    //     render() {
    //         console.log(this.state.value)
    //         return (
    //             <select value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }}>
    //                 <option value='0' disabled>Select Data Source</option>
    //                 {
    //                     ['Supermarkets producst and categories', 2].map((i, j) => {
    //                         return <option key={i} value={i}>{i}</option>
    //                     })
    //                 }
    //             </select>
    //         );
    //     }
}

export default DynamicIndex