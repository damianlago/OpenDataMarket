import axios from 'axios'

export default class CategoryService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://18.157.253.218:3000/api/v1/retail/categories'
        })
    }

    categories = () => this.api.get('/categories')
}