import React, { Component } from 'react'
import Select from 'react-select-v2'
import axios from 'axios'

class SupermarketFilters extends Component {
    constructor() {
        super()
        this.state = {
            selectOptions: [],
            id: "",
            name: ''
        }
    }

    async getOptions() {
        const res = await axios.get('http://18.157.253.218:3000/api/v1/retail/categories')
        const data = res.data

        const options = data.map(elm => ({
            "label": elm.supermarket + elm.category

        }))

        this.setState({ selectOptions: options })

    }

    handleChange(e) {
        this.setState({ name: e.label })
    }

    componentDidMount() {
        this.getOptions()
    }

    render() {
        return (
            <div>
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                <p>selected: {this.state.name} id: {this.state.index} </p>
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import Select from 'react-select-v2'
// import axios from 'axios'

// class Products extends Component {
//     constructor() {
//         super()
//         this.state = {
//             selectOptions: [],
//             id: "",
//             name: ''
//         }
//     }

//     async getOptions() {
//         const res = await axios.get('http://18.157.253.218:3000/api/v1/retail/categories')
//         const data = res.data

//         const options = data.map(elm => ({
//             "label": elm.supermarket + elm.category

//         }))

//         this.setState({ selectOptions: options })

//     }

//     handleChange(e) {
//         this.setState({ name: e.label })
//     }

//     componentDidMount() {
//         this.getOptions()
//     }

//     render() {
//         return (
//             <div>
//                 <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
//                 <p>selected: {this.state.name} id: {this.state.index} </p>
//             </div>
//         )
//     }
// }

// export default Products

// import React, { Component } from 'react'
// import supermarketService from "../../../../service/supermarkets.service";
// class SupermarketFilters extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//         this.authService = new authService()
//     }
//     render() {

//         return (
//             <select>
//                 <option value=""></option>
//             </select>
//         )
//     }
// }

export default SupermarketFilters