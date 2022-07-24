import { useSelector, useDispatch } from 'react-redux';

import { removeCart } from '~/redux/slices/cartSlice';
import { cartTotalPriceSelector, cartTotalSelector } from '~/redux/slices/selectorSlice';
import { Link } from 'react-router-dom';

import ButtonQty from '~/components/ButtonQty';

import './Cart.scss';

function Cart() {
    const dispatch = useDispatch();

    const carts = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const totalQty = useSelector(cartTotalSelector);

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (
        <div className="container cart-body">
            <div className="main grid wide">
                {totalQty > 0 ? (
                    <div className="form-cart">
                        <div className="row">
                            <div className="col l-8 m-12 c-12">
                                <div className="form-cart__title hide-on-mobile-tablet">
                                    Đơn hàng của bạn &nbsp;
                                    <span className="total-cart">
                                        (<span className="count-item-product">{totalQty}</span>) Sản phẩm
                                    </span>
                                    <span>
                                        <Link to="/products">Tiếp tục mua hàng</Link>
                                    </span>
                                </div>
                                <div className="form-cart__cart-header-info hide-on-mobile-tablet">
                                    <div>Sản phẩm</div>
                                    <div>Đơn giá</div>
                                    <div>Số lượng</div>
                                    <div>Thành tiền</div>
                                </div>
                                <div className="form-cart__cart-body">
                                    {carts &&
                                        carts.map((cart) => (
                                            <div className="form-cart__cart-product" key={cart.id}>
                                                <Link
                                                    to={`/products/${cart.productId}`}
                                                    className="form-cart__cart-product-img"
                                                >
                                                    <img src={cart.image} alt="" />
                                                </Link>
                                                <div className="form-cart__cart-product-info">
                                                    <div className="form-cart__cart-name">
                                                        <Link
                                                            to={`/products/${cart.productId}`}
                                                            className="form-cart__cart-product-name"
                                                        >
                                                            {cart.name}
                                                        </Link>
                                                        <div className="form-cart__mobile-price hide-on-pc">
                                                            <span className="form-cart__cart-price">
                                                                {numberWithCommas(cart.price)}đ
                                                            </span>
                                                        </div>
                                                        <span className="form-cart__cart-product-color-size">
                                                            {cart.variantTitle}
                                                        </span>
                                                        <div className="form-cart__remove-cart">
                                                            <div
                                                                className="form-cart__mobile-group-btn-qty hide-on-pc"
                                                                style={{ display: 'flex' }}
                                                            >
                                                                <ButtonQty
                                                                    quantity={cart.quantity}
                                                                    id={cart.id}
                                                                    isExistCart
                                                                />
                                                            </div>
                                                            <Link
                                                                to
                                                                className="cart-remove"
                                                                onClick={() => dispatch(removeCart(cart.id))}
                                                            >
                                                                Xóa
                                                            </Link>
                                                            <span className="cart-like hide-on-mobile-tablet">
                                                                <Link to className="setWishList">
                                                                    <img
                                                                        src="	https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/heart_ico.svg?1648736343537"
                                                                        alt=""
                                                                    />
                                                                    <span>Lưu trong danh sách yêu thích</span>
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form-cart__body-item hide-on-mobile-tablet">
                                                        <span className="form-cart__cart-price">
                                                            {numberWithCommas(cart.price)}đ
                                                        </span>
                                                    </div>
                                                    <div className="form-cart__body-item group-btn-qty hide-on-mobile-tablet">
                                                        <ButtonQty quantity={cart.quantity} id={cart.id} isExistCart />
                                                    </div>
                                                    <div className="form-cart__body-item hide-on-mobile-tablet">
                                                        <span className="form-cart__cart-price">
                                                            {numberWithCommas(cart.price * cart.quantity)}đ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12">
                                <div className="form-cart-payment">
                                    <div className="form-cart-payment__ship">
                                        <p className="form-cart-payment__ship-title">Miễn phí giao hàng</p>
                                        <span className="form-cart-payment__ship-text">
                                            Mua thêm
                                            <b>100.000đ</b>
                                            để được
                                            <b>Freeship</b>
                                        </span>
                                    </div>
                                    <div className="form-cart-payment__subtotal">
                                        <div className="form-cart-payment__subtotal-text">Tổng cộng :</div>
                                        <div className="form-cart-payment__subtotal-price">
                                            {numberWithCommas(totalPrice)}đ
                                        </div>
                                    </div>
                                    <a href="checkout.html" className="btn-more">
                                        Thanh toán &nbsp;({totalQty})
                                    </a>
                                    <span className="form-cart-payment__text-sale">
                                        Dùng mã giảm giá của YODY trong bước tiếp theo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="empty-cart">
                            <img
                                className="empty-cart__img"
                                src="https://bizweb.dktcdn.net/100/438/408/themes/863105/assets/blank_cart.svg?1658543688198"
                                alt="cart"
                            />
                            <p className="empty-cart__text">Giỏ hàng của bạn trống</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
