import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Products from '~/pages/Products';
import SignIn from '~/pages/SignIn';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/sign-in', component: SignIn, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
