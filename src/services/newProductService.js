import * as httpDemoRequest from '~/utils/httpDemoRequest';

export const getNewProducts = async () => {
    try {
        const res = await httpDemoRequest.get('products');
        return res;
    } catch (err) {
        console.log(err);
    }
};
