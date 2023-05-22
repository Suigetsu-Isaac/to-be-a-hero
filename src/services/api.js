import axios from 'axios';

require('dotenv/config');

const url = "https://to-be-a-hero.onrender.com"
const envUrl = process.env.REACT_APP_API_URL
const api = axios.create({
    baseURL : url,
})

export default api;
