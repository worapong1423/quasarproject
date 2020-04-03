import Axios from "axios"

const VUE_APP_API_URL = "http://127.0.0.1:8000";


const axios = Axios.create({
    baseURL: VUE_APP_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
    }
})

export default axios
