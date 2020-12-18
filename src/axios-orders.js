import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://burgerbuilder-edf4b-default-rtdb.firebaseio.com/'
}); 

export default instance;