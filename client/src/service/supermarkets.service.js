// import axios from 'axios'

// export default class SupermarketService {

//     constructor() {
//         this.api = axios.create({
//             baseURL: process.env.REACT_APP_API_URL,
//             withCredentials: true
//         })
//         this.state = {
//             data: [],
//             isLoaded: false,
//         }
//         this.apiData = []
//     }


//     fetchData() {
//         fetch("http://18.157.253.218:3000/api/v1/retail/categories")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.apiData = result;
//                     this.setState({
//                         isLoaded: true,
//                         data: result
//                     });
//                 },
//             )
//     }


//     componentDidMount() {
//         this.fetchData()
//     }

// }

