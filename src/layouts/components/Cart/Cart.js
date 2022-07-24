import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '~/redux/slices/cartSlice';
import { cartTotalPriceSelector, cartTotalSelector } from '~/redux/slices/selectorSlice';

import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import imgs from '~/assets/imgs';
import ButtonQty from '~/components/ButtonQty';

function Cart() {
    const carts = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const totalQty = useSelector(cartTotalSelector);
    const dispatch = useDispatch();
    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (
        <div className="header-cart">
            <Link to="/cart" className="header-cart__icon">
                <img src={imgs.cart} alt="" />
                {totalQty > 0 ? <span className="header-cart__count-item">{totalQty}</span> : false}
            </Link>
            {totalQty > 0 ? (
                <div className="top-cart-content">
                    <div className="top-cart-content__header">
                        <Link to="/login" className="title-link">
                            <span>Đăng nhập</span>
                            <span>Đăng nhập và đồng bộ sản phẩm đến giỏ hàng của bạn</span>
                            <i className="font-icon fa-solid fa-circle-arrow-right" />
                        </Link>
                    </div>
                    <div className="top-cart-content__body edit-scrollbar">
                        {carts.map((cart) => (
                            <div className="cart-body-row" key={cart.id}>
                                <Link className="cart-body-row__img" to={`/products/${cart.productId}`}>
                                    <img src={cart.image} alt="" />
                                </Link>
                                <div className="cart-body-row__info">
                                    <div className="cart-body-row__info__name">
                                        <Link to={`/products/${cart.productId}`} className="cart-product-name">
                                            {cart.name}
                                        </Link>
                                        <span className="cart-price">{numberWithCommas(cart.price)}đ</span>
                                        <span className="cart-product-color-size">{cart.variantTitle}</span>
                                        <span className="cart-btn-remove" onClick={() => dispatch(removeCart(cart.id))}>
                                            {' '}
                                        </span>
                                    </div>
                                    <div className="cart-body-row__info__quality">
                                        <ButtonQty quantity={cart.quantity} id={cart.id} isExistCart />
                                        <div className="price-total">
                                            <span className="price-total__text">Tổng cộng:</span>
                                            <span className="cart-price">
                                                {numberWithCommas(cart.price * cart.quantity)}đ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="top-cart-content__footer">
                        <div className="ship-cart">
                            <span className>
                                Đủ điều kiện nhận
                                <a href className="ship-cart__link">
                                    vận chuyển miễn phí
                                </a>
                            </span>
                        </div>
                        <div className="top-cart-content__footer-btn-view-cart">
                            <div className="cart-subtotal">
                                <span className="price-total__text">Tổng cộng: </span>
                                <span className="cart-subtotal__text-price"> {numberWithCommas(totalPrice)}đ</span>
                            </div>
                            <div className="btn-checkout-cart">
                                {/* <button className="btn-process-checkout">Xem giỏ hàng</button> */}
                                <Button primary to="/cart">
                                    Xem giỏ hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="top-cart-content-empty">
                    <img src={imgs.blank_cart} alt="" />
                    <div className="top-cart-content-empty__text">Giỏ hàng của bạn trống</div>
                    <Link to="/login" className="top-cart-content-empty__link-login">
                        Đăng nhập / Đăng ký
                    </Link>
                    <Link to="/" className="top-cart-content-empty__link-product">
                        Mua ngay
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
