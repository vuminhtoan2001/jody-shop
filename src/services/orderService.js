import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const createOrder = async (data) => {
    try {
        const res = await httpDemoRequest.post('orders', data);
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

export const getOrder = async (url = 'orders') => {
    try {
        const res = await httpDemoRequest.get(url);
        return res;
    } catch (err) {
        console.log(err);
    }
};
