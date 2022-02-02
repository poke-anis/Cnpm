import axios from 'axios';
import {Cookies} from 'react-cookie';
const cookies = new Cookies();


console.log(window.location.href)
const instance = axios.create({
  
    baseURL: 'http://127.0.0.1:3001/api/',
    headers: {'Authorization': 'Bearer '+cookies.get('token_key')}
});


export default instance;