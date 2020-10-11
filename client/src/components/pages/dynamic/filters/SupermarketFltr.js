// import React, { Component } from 'react'
// import Select from 'react-select-v2'
// import axios from 'axios'

// class SupermarketFilters extends Component {
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
//             "label": elm.supermarket

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

import React, { Component } from 'react'
// import axios from 'axios'

// class SupermarketFilters extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: "",
//             selectOptions: []
//             // carrefour: [],
//             // mercadona: [],
//             // dia: []
//         }
//         this.handleDropdownChange = this.handleDropdownChange.bind(this);
//     }

//     handleDropdownChange(e) {
//         this.setState({ value: e.target.value });
//     }

//     // componentDidMount() {
//     // const baseUrl = 'http://18.157.253.218:3000/api/v1/retail/categories'
//     // fetch(baseUrl)
//     //     .then((response) => response.json())
//     //     .then((data) => this.setState({ carrefour: data }))
//     // }

//     async getOptions() {
//         const res = await axios.get('http://18.157.253.218:3000/api/v1/retail/categories')
//         const data = res.data

//         const options = data.map(elm => ({
//             "label": elm.category

//         }))

//         this.setState({ selectOptions: options })

//     }

//     componentDidMount() {
//         this.getOptions()
//     }

//     render() {
//         console.log(this.state.selectOptions)
//         return (
//             <>
//                 <select onChange={this.handleDropdownChange}>
//                     <option value="carrefour">Carrefour</option>
//                     <option value="mercadona">Mercadona</option>
//                     <option value="dia">Dia</option>
//                 </select>
//                 <select className="form-control" value={currentValue} onChange={onChange}>
//                     <option value="">
//                         Select one...
//                     s</option>
//                     {selectOptions.map(i, j => (
//                         <option key={j} value={i.category}>
//                             {i.category}
//                         </option>
//                     ))}
//                 </select>
//             </>
//         )
//     }
// }

class SupermarketFilters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            selectedCategory: "",
        };
    }

    componentDidMount() {
        fetch("http://18.157.253.218:3000/api/v1/retail/categories")
            .then(response => {
                return response.json();
            })
            .then(data => {
                let teamsFromApi = data.map(elm => {
                    return { categories: elm };
                });
                this.setState({
                    categories: [
                        {
                            supermarket: "",
                            category: "",
                            url: ""
                        }
                    ].concat(teamsFromApi)
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.categories)
        console.log(this.state.selectedCategory)

        return (
            <>
                <select
                    value={this.state.selectedCategory}
                    onChange={e =>
                        this.setState({
                            selectedCategory: e.target.value
                        })
                    }
                >
                    {this.state.categories.map((elm) => (
                        <option
                            key={elm.id}
                            value={elm.category}
                        >
                        </option>
                    ))}
                </select>
            </>
        );
    }
}


export default SupermarketFilters