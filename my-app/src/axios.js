import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:5001/challenge-e932f/us-central1/api`
});//The API URL

export default instance;