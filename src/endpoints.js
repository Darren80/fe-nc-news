import axios from "axios";


let axios1 = axios.create({
    baseURL: 'https://backend-news-api.onrender.com/api'

})

export const getArticles = () => {
    return axios1.get('/articles')
}

export const getArticle = (articleID) => {
    return axios1.get(`/article/${articleID}`);
}

export const getArticlesComments = (articleID) => {
    return axios1.get(`/articles/${articleID}/comments`);
}