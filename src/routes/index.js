import config from '~/config';
// Layout
import { HeaderOnly, BodyOnly } from '~/layouts';
// page
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import ProductDetail from '~/pages/ProductDetail';
import News from '~/pages/News';
import NewsDetail from '~/pages/NewsDetail';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import WishList from '~/pages/WishList';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Products },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.news, component: News },
    { path: config.routes.newsDetail, component: NewsDetail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout, layout: BodyOnly },
    { path: config.routes.signIn, component: SignIn, layout: HeaderOnly },
    { path: config.routes.signUp, component: SignUp, layout: HeaderOnly },
    { path: config.routes.wishList, component: WishList },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
