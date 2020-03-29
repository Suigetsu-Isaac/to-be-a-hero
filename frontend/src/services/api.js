import axios from 'axios';

const api = axios.create({
    baseURL : 'https://meuapp-be-the-hero.herokuapp.com',
})

export default api;