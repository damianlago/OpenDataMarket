import axios from 'axios'

export default class CategoryService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
        // this.state = {
        //     categories: []
        // }
    }

    // getData = () => {
    //     fetch('http://18.157.253.218:3000/api/v1/retail/categories')
    //         .then(response => response.json())
    //         .then((data) => this.setState({ categories: data }))
    // }
}