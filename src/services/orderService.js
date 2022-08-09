import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const createOrder = async (data) => {
    try {
        const res = await httpDemoRequest.post('order', data);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const createOrderDetail = async (data) => {
    try {
        const res = await httpDemoRequest.post('orderDetail', data);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getProducts = async (url = 'products') => {
    try {
        const res = await httpDemoRequest.get(url);
        return res;
    } catch (err) {
        console.log(err);
    }
};
