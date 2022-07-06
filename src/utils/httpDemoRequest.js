import axios from 'axios';
const request = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
