import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '~/redux/slices/selectorSlice';
import { wishListTotalSelector } from '~/redux/slices/selectorSlice';

import config from '~/config';
import Search from '~/layouts/components/Search';
import Cart from '~/layouts/components/Cart';
import './Header.scss';
import imgs from '~/assets/imgs';

function Header() {
    const currentUser = false;
    const totalQtyCart = useSelector(cartTotalSelector);
    const totalQtyWishList = useSelector(wishListTotalSelector);
    return (
        <header className="header">
            <div className="topbar">
                <div className="topbar__banner">
                    <Link to={config.routes.home} className="topbar__banner-link"></Link>
                </div>
                <div className="grid wide hide-on-mobile-tablet">
                    <ul className="topbar__list">
                        <li className="topbar__list-item">
                            <Link to={config.routes.home} className="link-item">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>
                                    Tìm <span className="text-color">160+</span> cửa hàng
                                </span>
                            </Link>
                        </li>
                        <li className="topbar__list-item">
                            <Link to={config.routes.home} className="link-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>
                                    <b className="text-color">1800 2086</b>
                                </span>
                                <img src={imgs.free_call} alt="phone" className="img-free" />
                            </Link>
                        </li>
                        <li className="topbar__list-item">
                            <Link to="" className="link-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>chamsockhachhang@gmail.com</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid wide header-nav">
                <div className="header-nav__left">
                    <Link to={config.routes.home} className="header-nav__logo">
                        <img
                            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/logo.svg?1646961127726"
                            alt=""
                        />
                    </Link>
                    <ul className="header-nav__list hide-on-mobile-tablet">
                        <li className="header-nav__item">
                            <NavLink to="/" className="header-nav__item-link">
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className="header-nav__item">
                            <NavLink to="/products" className="header-nav__item-link">
                                NỮ
                            </NavLink>
                            <div className="header-nav__child">
                                <ul className="header-nav__child-item">
                                    <li className="menu-child-main">
                                        <ul className="menu-child-item__list">
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Áo
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>
                                                            Áo Polo nữ
                                                            <span className="hot">HOT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo sơ mi nữ</a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo thun nữ</a>
                                                    </li>
                                                    <li>
                                                        <a href>
                                                            Áo khoác nữ
                                                            <span className="hot">HOT</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Quần
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>
                                                            Quần jean nữ
                                                            <span className="hot">NEW</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href>Quần âu nữ</a>
                                                    </li>
                                                    <li>
                                                        <a href>Quần kaki nữ</a>
                                                    </li>
                                                    <li>
                                                        <a href>Quần short nữ</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Váy nữ
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>Chân váy</a>
                                                    </li>
                                                    <li>
                                                        <a href>Váy liền</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Bộ đồ nữ
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>Bộ đồ nữ mặc nhà</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Yody sport
                                                </a>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Phụ kiện
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>Túi xách</a>
                                                    </li>
                                                    <li>
                                                        <a href>Giày nữ</a>
                                                    </li>
                                                    <li>
                                                        <a href>Phụ kiện khác</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-child__banner">
                                        <img src={imgs.banner_menu_girl} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-nav__item">
                            <NavLink to="/products" className="header-nav__item-link">
                                NAM
                                <i className="font-icon-down fa-solid fa-angle-down" />
                            </NavLink>
                            <div className="header-nav__child">
                                <ul className="header-nav__child-item">
                                    <li className="menu-child__banner">
                                        <img src={imgs.banner_menu_left} alt="" />
                                    </li>
                                    <li className="menu-child-main">
                                        <ul className="menu-child-item__list">
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Áo
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>
                                                            Áo Polo nam
                                                            <span className="hot">HOT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo sơ mi nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo thun nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo khoác nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo vest nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Áo ba lỗ </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Quần
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>Quần jean nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Quần tây nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Quần kaki nam</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Đồ mặc trong
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>
                                                            Đồ lót
                                                            <span className="hot">new</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Yody sport
                                                </a>
                                            </li>
                                            <li className="menu-child-item">
                                                <a href className="menu-child-item__title">
                                                    Phụ kiện
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href>Ví nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Thắt lưng nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Giày nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>mũ nam</a>
                                                    </li>
                                                    <li>
                                                        <a href>Phụ kiện khác</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-child__banner">
                                        <img src={imgs.banner_menu_right} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-nav__item">
                            <NavLink to="/products" className="header-nav__item-link">
                                TRẺ EM
                            </NavLink>
                        </li>
                        <li className="header-nav__item">
                            <NavLink to="/news" className="header-nav__item-link">
                                TIN TỨC
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header-nav__right">
                    {/* Search here */}
                    <Search />
                    <div className="header-tool">
                        <div className="user user-hover hide-on-mobile-tablet">
                            <Link to="/login" className="user_login">
                                <img src={imgs.user} alt="" />
                            </Link>
                            {currentUser ? (
                                <ul className="user-list">
                                    <li className="user-list__item">
                                        <p className="user-name">Vũ Minh Toán</p>
                                    </li>
                                    <li className="user-list__item">
                                        <Link to="/logout" className="user-list__item-link">
                                            Đăng xuất
                                        </Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="user-list">
                                    <li className="user-list__item">
                                        <Link to="/register" className="user-list__item-link">
                                            Đăng ký
                                        </Link>
                                    </li>
                                    <li className="user-list__item">
                                        <Link to="/login" className="user-list__item-link">
                                            Đăng nhập
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="wishlist-header hide-on-mobile-tablet">
                            <Link to="/yeu-thich" className="wishlist-header__icon">
                                <img src={imgs.heart} alt="" />
                                {totalQtyWishList > 0 ? (
                                    <span className="headerWishlistCount">{totalQtyWishList}</span>
                                ) : (
                                    false
                                )}
                            </Link>
                        </div>
                        <Cart />
                        {/* Navbar mobile */}
                        <div className="category-action">
                            <label htmlFor="checkbox-nav-mobile">
                                <FontAwesomeIcon icon={faBars} className="category-action__icon" />
                            </label>
                            <input
                                type="checkbox"
                                hidden
                                id="checkbox-nav-mobile"
                                className="input-checkbox-nav-mobile"
                            />
                            <label htmlFor="checkbox-nav-mobile" className="nav-mobile-overlay"></label>
                            {/* nav Mobile */}
                            <div className="nav-mobile">
                                <label htmlFor="checkbox-nav-mobile">
                                    <FontAwesomeIcon icon={faXmark} className="icon-remove-nav-mobile" />
                                </label>
                                <div className="nav-mobile__tabs">
                                    <div className="tab-item active">Nữ</div>
                                    <div className="tab-item">Nam</div>
                                    <div className="tab-item">Trẻ em</div>
                                    <div className="line" />
                                </div>
                                {/* Tab content */}
                                <div className="menu-first">
                                    <ul className="list-parent tab-pane active">
                                        <li className="list-parent_item">Sale</li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/aonu.jpg?v=1637315914097"
                                                alt=""
                                            />
                                            <span>Áo</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/quannu.jpg?v=1637316029127"
                                                alt=""
                                            />
                                            <span>Quần</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/bodo.jpg?v=1636467720970"
                                                alt=""
                                            />
                                            <span>Bộ đồ nữ</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/thumb/small/100/438/408/collections/sport-6c1efd43-1018-4a48-af26-64ab98f58a46.jpg?v=1646964792980"
                                                alt=""
                                            />
                                            <span>yody sport</span>
                                            <i className="icon-arrow-right hidden" />
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/vay.jpg?v=1637142599783"
                                                alt=""
                                            />
                                            <span>Váy nữ</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/bodo.jpg?v=1636467720970"
                                                alt=""
                                            />
                                            <span>Bộ đồ nữ</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-parent tab-pane ">
                                        <li className="list-parent_item">Sale</li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                                                alt=""
                                            />
                                            <span>Áo</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/quan.jpg?v=1636387511163"
                                                alt=""
                                            />
                                            <span>Quần</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Quần nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/dolotnam.jpg?v=1636388675510"
                                                alt=""
                                            />
                                            <span>Đồ mặc trong</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Đồ mặc trong</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/thumb/small/100/438/408/collections/sport-6c1efd43-1018-4a48-af26-64ab98f58a46.jpg?v=1646964792980"
                                                alt=""
                                            />
                                            <span>yody sport</span>
                                            <i className="icon-arrow-right hidden" />
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/giay.jpg?v=1637142749837"
                                                alt=""
                                            />
                                            <span>Phụ kiện</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Phụ kiện</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-parent tab-pane ">
                                        <li className="list-parent_item">Sale</li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/aokid.jpg?v=1636389932777"
                                                alt=""
                                            />
                                            <span>Áo</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/quantreem.jpg?v=1637316009573"
                                                alt=""
                                            />
                                            <span>Quần</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="list-parent_item list-parent__has-child">
                                            <img
                                                className="list-parent__has-child-img"
                                                src="https://bizweb.dktcdn.net/100/438/408/collections/dambegai.jpg?v=1636389987847"
                                                alt=""
                                            />
                                            <span>Váy đầm</span>
                                            <i className="icon-arrow-right" />
                                            {/* menu child of child */}
                                            <ul className="list-child-of-list-parent">
                                                <div className="list-child__title-and-close">
                                                    <i className="icon-arrow-left" />
                                                    <span>Áo nữ</span>
                                                </div>
                                                <div className="list-child__body">
                                                    <div className="row">
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-polo-nu.jpg?v=1636686900827"
                                                                    alt=""
                                                                />
                                                                <span>Áo polo nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-thun-nu.jpg?v=1636710874283"
                                                                    alt=""
                                                                />
                                                                <span>Áo thun nữ</span>
                                                            </a>
                                                        </div>
                                                        <div className="list-child__body-item col m-6 c-6">
                                                            <a href>
                                                                <img
                                                                    className="list-parent__has-child-img-last"
                                                                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/collections/ao-so-mi-nu.jpg?v=1636710859640"
                                                                    alt=""
                                                                />
                                                                <span>Áo sơ mi nữ Áo sơ mi nữ Áo sơ mi nữ</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* menu-mobile-bottom */}
                                <div className="nav-mobile__bottom-menu">
                                    <Link to="/" className="nav-mobile__bottom-link">
                                        <img src={imgs.home_icon} alt="" />
                                    </Link>
                                    <Link to="/yeu-thich" className="nav-mobile__bottom-link">
                                        <img src={imgs.heart} alt="" />
                                        {totalQtyWishList > 0 ? (
                                            <span className="headerWishlistCount">{totalQtyWishList}</span>
                                        ) : (
                                            false
                                        )}
                                    </Link>
                                    <Link to="/cart" className="nav-mobile__bottom-link">
                                        <img src={imgs.cart} alt="" />
                                        {totalQtyCart > 0 ? (
                                            <span className="header-cart__count-item in-nav-mobile">
                                                {totalQtyCart}
                                            </span>
                                        ) : (
                                            false
                                        )}
                                    </Link>
                                    <a href className="nav-mobile__bottom-link">
                                        <img src="./assets/img/user.svg" alt="" />
                                    </a>
                                </div>
                                {/* End nav mobile */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
