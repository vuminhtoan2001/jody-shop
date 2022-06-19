import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'product', view = 'json') => {
    try {
        const res = await httpRequest.get('search', {
            params: { q: q, type: type, view: view },
        });
        return res.results;
    } catch (err) {
        console.log(err);
    }
};
