import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://desafio.pontue.com.br',
});

export default Api;
