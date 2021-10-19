import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://studiocastan.herokuapp.com',
  timeout: 1000,
});

export default instance;
