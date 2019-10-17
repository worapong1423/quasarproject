import Axios from "axios"

const VUE_APP_API_URL = "http://192.168.1.39:8000";


const axios = Axios.create({
    baseURL: VUE_APP_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
    }
})

export default axios
