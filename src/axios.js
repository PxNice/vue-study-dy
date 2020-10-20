import Axios from "axios"

const axios = Axios.create({
    baseURL:"http://api.zhinengshe.com/10012-douyin/",
    headers:{
        apikey:"2d78b1b3aa094e6d8c5237aa06c589f1"
    },
});

export default axios
