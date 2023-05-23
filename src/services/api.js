import axios from 'axios';

const url = "https://to-be-a-hero.onrender.com"

const api = axios.create({
    baseURL : url,
})

export default api;
