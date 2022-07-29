import axios from "axios";

const myAxios = axios.create({
    // proxy: {
    //     protocol: 'http',
    //     host: 'localhost',
    //     port: 4000,
    // },
    baseURL: '/api'

})

export default myAxios