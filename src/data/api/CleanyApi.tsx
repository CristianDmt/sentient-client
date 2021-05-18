import axios from 'axios';

export default axios.create({
    baseURL: "https://api.staging.test.cleany.ro"
});