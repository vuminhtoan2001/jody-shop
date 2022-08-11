import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const createCustomer = async (data) => {
    try {
        const res = await httpDemoRequest.post('customers', data);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getCustomers = async (url = 'customers') => {
    try {
        const res = await httpDemoRequest.get(url);
        return res;
    } catch (err) {
        console.log(err);
    }
};
