import { useReducer, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import subVn from 'sub-vn';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faCircleUser,
    faTruck,
    faCreditCard,
    faMoneyBill1Wave,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

import * as orderService from '~/services/orderService';
import { formValidateCheckout } from '~/FormValidation';
import Input from '~/components/Input';
import InputSelect from '~/components/InputSelect';
import Image from '~/components/Image';

import { cartTotalPriceSelector, cartTotalSelector } from '~/redux/slices/selectorSlice';
import { formReducer } from '~/hooks';

import './Checkout.scss';

function Checkout() {
    const carts = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const totalQty = useSelector(cartTotalSelector);

    const [formData, dispatch] = useReducer(formReducer, {});
    const [formErrors, setFormErrors] = useState();
    const [submitting, setSubmitting] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [provinces, setProvinces] = useState(subVn.getProvinces());
    const [districts, setDistricts] = useState();
    const [wards, setWards] = useState();
    const shippingRef = useRef();

    useEffect(() => {
        document.title = 'Thanh toán';
    }, []);
    // Logic shipping
    useEffect(() => {
        let classNameShipping = shippingRef.current.className;
        if (districts && wards.length > 0) {
            classNameShipping = classNameShipping.includes('selected')
                ? classNameShipping
                : (classNameShipping += ' selected');
            shippingRef.current.className = classNameShipping;
        } else {
            classNameShipping = classNameShipping.includes('selected')
                ? classNameShipping.replace('selected', '')
                : classNameShipping;
            shippingRef.current.className = classNameShipping;
        }
    }, [wards, districts]);

    // handle FormErrors
    useEffect(() => {
        if (submitting) {
            setFormErrors(formValidateCheckout(formData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    const validValuesForm = () => {
        return Object.keys(formErrors).length === 0 ? true : false;
    };

    const handleChange = (event) => {
        dispatch({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleProvinces = (event) => {
        const currentProvince = event.target.value;
        dispatch({
            name: event.target.name,
            value: currentProvince,
        });
        setDistricts(subVn.getDistrictsByProvinceCode(currentProvince));
        setWards([]);
    };

    const handleDistricts = (event) => {
        const currentDistrict = event.target.value;
        dispatch({
            name: event.target.name,
            value: currentDistrict,
        });
        setWards(subVn.getWardsByDistrictCode(currentDistrict));
    };

    const handleWards = (event) => {
        dispatch({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const submitForm = () => {
        const orderId = uuidv4();
        const orderData = {
            ...formData,
            id: orderId,
            date: new Date().toJSON().slice(0, 10).split('-').reverse().join('/'),
            orderDetails: carts,
        };
        const response = orderService.createOrder(orderData);
        console.log(response);
    };

    const handleSubmit = () => {
        if (!submitting) {
            setFormErrors(formValidateCheckout(formData));
            setSubmitting(true);
        } else {
            if (validValuesForm()) {
                submitForm();
            }
        }
    };

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (
        <form id="checkoutForm" className="checkoutForm">
            <div className="grid wide">
                <div className="checkoutForm__container row">
                    <div className="checkoutForm__main col l-8 m-12 c-12">
                        <Link to="/" className="checkoutForm__logo hide-on-mobile-tablet">
                            <img
                                src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/checkout_logo.png?1658829435138"
                                alt=""
                            />
                        </Link>
                        <div className="checkoutForm__main-content row">
                            <div className="checkoutForm__info col l-6 m-6 c-12">
                                <div className="checkoutForm__info-title">
                                    <div className="checkoutForm__title">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        &nbsp; Thông tin giao hàng
                                    </div>
                                    <Link to="/login" className="checkoutForm__login">
                                        <FontAwesomeIcon icon={faCircleUser} />
                                        <span>Đăng nhập</span>
                                    </Link>
                                </div>
                                <div className="checkoutForm__info-content">
                                    <Input
                                        label="Họ và tên"
                                        name="name"
                                        handleChange={handleChange}
                                        error={formErrors && formErrors.name}
                                    />
                                    <Input
                                        label="Số điện thoại"
                                        name="phone"
                                        handleChange={handleChange}
                                        error={formErrors && formErrors.phone}
                                    />
                                    <Input
                                        label="Email"
                                        name="email"
                                        handleChange={handleChange}
                                        error={formErrors && formErrors.email}
                                    />
                                    <Input
                                        label="Địa chỉ"
                                        name="address"
                                        handleChange={handleChange}
                                        error={formErrors && formErrors.address}
                                    />
                                    <InputSelect
                                        label="Tỉnh thành"
                                        name="provinces"
                                        data={provinces}
                                        handleProvinces={handleProvinces}
                                        error={formErrors && formErrors.province}
                                    />
                                    <InputSelect
                                        label="Quận huyện"
                                        name="district"
                                        data={districts}
                                        handleDistricts={handleDistricts}
                                        disabled={false}
                                        error={formErrors && formErrors.district}
                                    />
                                    <InputSelect
                                        label="Phường xã"
                                        name="ward"
                                        data={wards}
                                        handleWards={handleWards}
                                        error={formErrors && formErrors.ward}
                                    />
                                    <div className="form-field">
                                        <textarea
                                            name="note"
                                            className="form-input textarea"
                                            placeholder="Ghi chú (tùy chọn)"
                                            defaultValue={''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="checkoutForm__shipping col l-6 m-6 c-12">
                                <div className="checkoutForm__title">
                                    <FontAwesomeIcon icon={faTruck} />
                                    &nbsp;Vận chuyển
                                </div>
                                <div className="checkoutForm__shipping-content" ref={shippingRef}>
                                    <div className="shipping-not-selected">Vui lòng nhập thông tin giao hàng</div>
                                    <div className="shipping-selected">
                                        <div className="shipping-selected__text-left">
                                            Miễn phí vẫn chuyển
                                            <span>20.000đ</span>
                                        </div>
                                        <div className="shipping-selected__text-right">Miễn phí</div>
                                    </div>
                                </div>
                                <div className="checkoutForm__method">
                                    <div className="checkoutForm__title checkoutForm__method-title">
                                        <i className="fa-regular fa-credit-card" />
                                        <FontAwesomeIcon icon={faCreditCard} />
                                        &nbsp;Thanh toán
                                    </div>
                                    <div
                                        className={`checkoutForm__method-content ${
                                            formErrors?.paymentMethod && 'invalid'
                                        }`}
                                    >
                                        <div className="checkoutForm__method-item">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="payment-method-radio"
                                                id="payment_vnpay"
                                                value="Thanh toán qua VNPay"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="payment_vnpay" className="payment-method-label">
                                                <div className="payment-method-label__text">Thanh toán qua VNPAY</div>
                                                <div
                                                    className="payment-method-label__logo"
                                                    style={{
                                                        background: `url("	https://bizweb.dktcdn.net/assets/themes_support/payment_icon_vnpay.png")
                                        no-repeat center center`,
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <div className="checkoutForm__method-item">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="payment-method-radio"
                                                id="payment_momo"
                                                value="Thanh toán qua ví MoMo"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="payment_momo" className="payment-method-label">
                                                <div className="payment-method-label__text">Thanh toán qua Ví MoMo</div>
                                                <div
                                                    className="payment-method-label__logo"
                                                    style={{
                                                        background: `url("https://bizweb.dktcdn.net/assets/admin/images/logomm1.png?v=1")
                                        no-repeat center center`,
                                                        backgroundSize: '28px 28px',
                                                    }}
                                                />
                                            </label>
                                        </div>
                                        <div className="checkoutForm__method-item">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="payment-method-radio"
                                                id="payment_cod"
                                                value="Thanh toán khi giao hàng"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="payment_cod" className="payment-method-label">
                                                <div className="payment-method-label__text">
                                                    Thanh toán khi giao hàng (COD)
                                                </div>
                                                <div className="payment-method-label__logo">
                                                    <FontAwesomeIcon
                                                        icon={faMoneyBill1Wave}
                                                        className="previous-cart__icon"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <span className="form-message">
                                            {formErrors ? formErrors.paymentMethod : false}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="checkoutForm__btn-checkout col l-0 m-12 c-12 row">
                                <div className="base-btn col l-12 m-12 c-12">ĐẶT HÀNG</div>
                                <a href className="previous-cart col l-0 m-12 m-o-3 c-12 c-o-3">
                                    <i className="previous-cart__icon fa-solid fa-angle-left" />
                                    <FontAwesomeIcon icon={faAngleLeft} className="previous-cart__icon" />
                                    &nbsp;Quay về giỏ hàng
                                </a>
                            </div>
                            <div className="checkoutForm__footer col l-12">
                                <div className="checkoutForm__policy">Điều khoản sử dụng</div>
                                <p className="checkoutForm__policy-text">
                                    Sau khi
                                    <b>hoàn tất đơn hàng</b>
                                    khoảng 60-90 phút (trong giờ hành chính), YODY sẽ nhanh chóng gọi điện xác nhận lại
                                    thời gian giao hàng với bạn. Yody Love!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="checkoutForm__sidebar col l-4 m-12 c-12">
                        <Link to="/" className="checkoutForm__logo hide-on-pc">
                            <img
                                src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/checkout_logo.png?1658829435138"
                                alt=""
                            />
                        </Link>
                        <div className="checkoutForm__sidebar-header">
                            <div className="checkoutForm__title">Đơn hàng ({totalQty} sản phẩm)</div>
                        </div>
                        <div className="checkoutForm__sidebar-content">
                            <div className="checkoutForm__product-list edit-scrollbar">
                                {carts.map((cart) => (
                                    <div className="checkoutForm__product-item" key={cart.id}>
                                        <div className="checkoutForm__product-img">
                                            <Image src={cart.image} alt="" />
                                            <span className="checkoutForm__product-qty">{cart.quantity}</span>
                                        </div>
                                        <div className="checkoutForm__product-name">
                                            <p>{cart.name}</p>
                                            <span className="checkoutForm__product-color-size">
                                                {cart.variantTitle}
                                            </span>
                                        </div>
                                        <div className="checkoutForm__product-price">
                                            {numberWithCommas(cart.price)}đ
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="checkoutForm__reductionCode row">
                                <div className="form-field col l-8 m-8 c-8">
                                    <input type="text" className="form-input" placeholder=" " />
                                    <label htmlFor className="form-label">
                                        Nhập mã giảm giá
                                    </label>
                                </div>
                                <div className="col l-4 m-4 c-4">
                                    <div className="base-btn">Áp dụng</div>
                                </div>
                            </div>
                            <div className="checkoutForm__oder-summary">
                                <div className="checkoutForm__oder-summary__row">
                                    <div className="checkoutForm__oder-summary-name">Tạm tính</div>
                                    <div className="checkoutForm__oder-summary-price">
                                        {numberWithCommas(totalPrice)}đ
                                    </div>
                                </div>
                                <div className="checkoutForm__oder-summary__row">
                                    <div className="checkoutForm__oder-summary-name">Phi vận chuyển</div>
                                    <div className="checkoutForm__oder-summary-price">Miễn phí</div>
                                </div>
                                <div className="checkoutForm__oder-summary__row">
                                    <div className="checkoutForm__oder-summary-name">Tổng cộng</div>
                                    <div className="checkoutForm__oder-summary-price">
                                        {numberWithCommas(totalPrice)}đ
                                    </div>
                                </div>
                            </div>
                            <div className="checkoutForm__btn-checkout hide-on-mobile-tablet row">
                                <Link to="/cart" className="previous-cart col l-6">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                    &nbsp;Quay về giỏ hàng
                                </Link>
                                <div className="base-btn col l-4" onClick={handleSubmit}>
                                    ĐẶT HÀNG
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Checkout;
