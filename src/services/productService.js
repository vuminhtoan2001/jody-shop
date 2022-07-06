import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const getNewProducts = async () => {
    try {
        const res = await httpDemoRequest.get('productsNew');
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
