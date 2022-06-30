import axios from 'axios';
const request = axios.create({
    baseURL: 'https://62bc2a486b1401736cf3dea7.mockapi.io/',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
