import axios from 'axios';
import {Cookies} from 'react-cookie';
const cookies = new Cookies();
const url = process.env.REACT_APP_BACKEND


const instance = axios.create({
  
    baseURL: `${url}/api/`,
    headers: {'Authorization': 'Bearer '+cookies.get('token_key')}
});


export default instance;