import axios from "axios";

const myAxios = axios.create({
    // proxy: {
    //     protocol: 'http',
    //     host: 'localhost',
    //     port: 4000,
    // },
    baseURL: 'https://workoutbuddy-7nfwe.herokuapp.com/api'

})

export default myAxios