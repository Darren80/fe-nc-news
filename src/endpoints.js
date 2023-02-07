import axios from "axios";


let axios1 = axios.create({
    baseURL: 'https://backend-news-api.onrender.com/api'

})

export let getArticles = () => {
    return axios1.get('/articles')
}