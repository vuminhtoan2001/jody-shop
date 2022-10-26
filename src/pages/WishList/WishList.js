import { useSelector } from 'react-redux';

// import { removeCart } from '~/redux/slices/cartSlice';
import { wishListTotalSelector } from '~/redux/slices/selectorSlice';

import TitlePathLink from '~/components/TitlePathLink';
import ProductItem from '~/components/Products/ProductItem';

import './WishList.scss';

function WishList() {
    const links = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Yêu thích', path: '/yeu-thich' },
    ];

    const wishList = useSelector((state) => state.wishList);
    const totalQty = useSelector(wishListTotalSelector);

    return (
        <div className="container wishlist-body">
            <div className="main grid wide">
                <TitlePathLink links={links} />
                <div className="wishlist-main row">
                    <div className="wishlist-sidebar">
                        <div className="wishlist-sidebar__block-login">
                            <img
                                src="https://bizweb.sapocdn.net/100/438/408/themes/848101/assets/account_ava.jpg?1649035388560"
                                alt=""
                            />
                            <a href className="wishlist-user">
                                Đăng ký
                            </a>
                            <span className="forward-slash">/</span>
                            <a href className="wishlist-user">
                                Đăng nhập
                            </a>
                            <a href className="wishlist-user">
                                Trải nghiệm ngay bây giờ
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a href className="wish-list__login-title-info">
                                    <i className="fa-regular fa-circle-user" />
                                    <span>Tài khoản của tôi</span>
                                </a>
                            </li>
                            <li>
                                <a href className="wish-list__login-title-info">
                                    <i className="fa-regular fa-file" />
                                    <span>Đơn hàng của tôi</span>
                                </a>
                            </li>
                            <li>
                                <a href className="wish-list__login-title-info">
                                    <i className="fa-solid fa-lock" />
                                    <span>Đổi mật khẩu</span>
                                </a>
                            </li>
                            <li>
                                <a href className="wish-list__login-title-info">
                                    <i className="fa-solid fa-location-dot" />
                                    <span>Sổ địa chỉ</span>
                                </a>
                            </li>
                            <li>
                                <a href="historyview.html" className="wish-list__login-title-info">
                                    <i className="fa-regular fa-eye" />
                                    <span>Đã xem gần đây</span>
                                </a>
                            </li>
                            <li>
                                <a href="wishlist.html" className="wish-list__login-title-info active">
                                    <i className="fa-regular fa-heart" />
                                    <span>Sản phẩm yêu thích</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="wishlist-content">
                        <div className="wishlist-content__title">
                            <h2 className="wishlist-content__title-text">Sản phẩm yêu thích</h2>
                            <span>{totalQty}&nbsp;sản phẩm</span>
                        </div>
                        {totalQty > 0 ? (
                            <div className="wishlist-content__list row">
                                {wishList &&
                                    wishList.map((product) => (
                                        <ProductItem
                                            key={product.id}
                                            className="swiper-products__item col l-4 m-6 c-6"
                                            productItem={product}
                                        />
                                    ))}
                            </div>
                        ) : (
                            <div className="wishlist-empty">
                                <span className="wishlist-empty__text">Danh sách yêu thích của bạn trống</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishList;
