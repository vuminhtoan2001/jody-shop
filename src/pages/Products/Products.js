import TitlePathLink from '~/components/TitlePathLink';
import SideBar from '~/components/Products/SideBar';
import FilterMobile from '~/components/Products/FilterMobile';

function Products() {
    return (
        <div className="main grid">
            <div className="flash-title hide-on-tablet-pc">
                Đơn hàng trền
                <b>498k</b>
                sẽ được miễn phí vận chuyển
            </div>
            <TitlePathLink />
            <div className="main__container grid wide">
                <div className="row">
                    <SideBar className="col l-3 m-0 c-0" />
                    <div className="main__content col l-9 m-12 c-12">
                        {/* Filter mobile */}
                        <FilterMobile />
                        {/* End filter mobile */}
                        <div className="section-category-products">
                            <div className="swiper-products__list row" id="main-products-list">
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail" data-sale="10%">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu</h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div
                                        className="swiper-products_thubnail swiper-products_thubnail-had-new-tag"
                                        data-sale="22%"
                                    >
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-dml-qjm5037-den-4.jpg?v=1646663806000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img src="./assets/img/aopolo_nu_vang.jpg" alt="" />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu, Áo polo nữ cafe</h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn4446-tra-2.jpg?v=1636605894000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm4355-vag-5.jpg?v=1635816690000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail" data-sale="10%">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu</h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div
                                        className="swiper-products_thubnail swiper-products_thubnail-had-new-tag"
                                        data-sale="22%"
                                    >
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-dml-qjm5037-den-4.jpg?v=1646663806000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img src="./assets/img/aopolo_nu_vang.jpg" alt="" />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu, Áo polo nữ cafe</h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn4446-tra-2.jpg?v=1636605894000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm4355-vag-5.jpg?v=1635816690000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail" data-sale="10%">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu</h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div
                                        className="swiper-products_thubnail swiper-products_thubnail-had-new-tag"
                                        data-sale="22%"
                                    >
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3299-dml-qjm5037-den-4.jpg?v=1646663806000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price product-info-price-sale">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img src="./assets/img/aopolo_nu_vang.jpg" alt="" />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>Áo polo nữ cafe phối màu, Áo polo nữ cafe</h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn4446-tra-2.jpg?v=1636605894000"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href
                                            className="swiper-products_thubnail__favorite swiper-products_thubnail__favorite-liked"
                                        >
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-products__item col l-3 m-4 c-6">
                                    <div className="swiper-products_thubnail">
                                        <span className="new-tag" />
                                        <a href className="product-item__img">
                                            <img
                                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm4355-vag-5.jpg?v=1635816690000"
                                                alt=""
                                            />
                                        </a>
                                        <a href className="swiper-products_thubnail__favorite">
                                            <img
                                                src="./assets/img/hearted_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-fill"
                                            />
                                            <img
                                                src="./assets/img/heart_ico.svg"
                                                alt=""
                                                className="icon-heart icon-heart-empty"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-item__info">
                                        <a href className="product-info-name">
                                            <h3>
                                                Áo polo nữ cafe phối màu Áo polo nữ cafe phối màu Áo polo nữ cafe phối
                                                màu
                                            </h3>
                                        </a>
                                        <div className="product-info-price">
                                            <span className="price-current">299.000đ</span>
                                            <span className="price-old">329.000đ</span>
                                        </div>
                                        <div className="product-info-option-watch">
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/small/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                            <div className="product-info-option-watch__item">
                                                <div
                                                    className="color"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://bizweb.dktcdn.net/thumb/large/100/438/408/products/qjn4014-tru-apn3700-gre-3.jpg?v=1641958600000")',
                                                        backgroundSize: '37px',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center !important',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // end
    );
}

export default Products;
