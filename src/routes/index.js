import config from '~/config';
// Layout
import { HeaderOnly } from '~/layouts';
// page
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Products },
    { path: config.routes.productDetail, component: Products },
    { path: config.routes.signIn, component: SignIn, layout: HeaderOnly },
    { path: config.routes.signUp, component: SignUp, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
