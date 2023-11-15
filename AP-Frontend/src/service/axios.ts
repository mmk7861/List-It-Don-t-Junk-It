import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 30000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default instance