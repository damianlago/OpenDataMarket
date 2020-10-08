import React, { Component } from 'react'
import Select from 'react-select-v2'
import axios from 'axios'

class DataVisualizer extends Component {
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

        const options = data.map((elm, index) => ({
            "value": elm.index,
            "label": elm.supermarket

        }))

        this.setState({ selectOptions: options })

    }

    handleChange(e) {
        this.setState({ id: e.value, name: e.label })
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

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedOption: '',
//             clearable: true,
//             categories: [],
//         }
//     }
//     componentDidMount() {
//         availableCategories()
//         const baseUrl = 'http://18.157.253.218:3000/api/v1/retail/categories'
//         fetch(baseUrl)
//             .then(res => {
//                 this.setState({
//                     cities: res.Categories.name
//                 })
//                 console.log("test1", this.state.categories)
//             })
//     }

//     handleChange(selectedOption) {
//         this.setState({ selectedOption });
//     }
//     render() {
//         let options = this.state.categories.map(function (category) {
//             return category.category;
//         })
//         return (
//             <div>
//                 <Select
//                     name="form-field-name"
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     clearable={this.state.clearable}
//                     searchable={this.state.searchable}
//                     options={options}
//                 />
//             </div>
//         )
//     }
// }

export default DataVisualizer