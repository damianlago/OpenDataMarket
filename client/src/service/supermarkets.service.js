import axios from 'axios'

export default class SupermarketService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
        // this.state = {
        //     SupermarketsData: []
        // }
    }

    // categoriesMercadona = () => {
    //     fetch('http://18.157.253.218:3000/api/v1/retail/categories?supermarket=mercadona-es')
    //         .then(response => response.json())
    //         .then((data) => this.setState({ SupermarketsData: data }))
    // }
    // async getOptions() {
    //     const res = await axios.get('http://18.157.253.218:3000/api/v1/retail/categories')
    //     const data = res.data
    // }
}