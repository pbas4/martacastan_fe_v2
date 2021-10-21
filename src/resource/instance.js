import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://studiocastan.herokuapp.com', // TODO: get this from env vars
  timeout: 1000,
});

export default instance;
