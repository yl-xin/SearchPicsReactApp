import axios from 'axios';


// create method creates an instance of axios client
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID '+process.env.REACT_APP_AccessKey
    }
});