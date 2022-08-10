import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const createUser = async (data) => {
    try {
        const res = await httpDemoRequest.post('users', data);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getUsers = async (url = 'users') => {
    try {
        const res = await httpDemoRequest.get(url);
        return res;
    } catch (err) {
        console.log(err);
    }
};
