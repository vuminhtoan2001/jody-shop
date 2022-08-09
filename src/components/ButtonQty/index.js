import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { increment, decrement, inputQty } from '~/redux/slices/cartSlice';

import className from 'classnames/bind';
import styles from './ButtonQty.module.scss';

const cx = className.bind(styles);

function ButtonQty({ large, id, quantity, isExistCart, getInputValue }) {
    const [qty, setQty] = useState(quantity);
    const dispatch = useDispatch();
    useEffect(() => {
        setQty(quantity);
    }, [quantity]);

    useEffect(() => {
        if (getInputValue) {
            getInputValue(qty);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qty]);

    const handleChange = (e) => {
        if (isExistCart) {
            let qty = Number(e.target.value);
            qty = qty > 0 ? qty : 1;
            setQty(qty);
            dispatch(inputQty({ id, qty }));
        } else {
            // getInputValue(e.target.value);
            setQty(e.target.value);
        }
    };
    const handlePlus = () => {
        if (isExistCart) {
            dispatch(increment(id));
        } else {
            // getInputValue(qty);

            setQty(qty + 1);
        }
    };
    const handleMinus = () => {
        if (isExistCart) {
            if (qty < 2) return;
            dispatch(decrement(id));
        } else {
            if (qty < 2) return;
            console.log('TRu 1 don vi');
            setQty(qty - 1);
        }
    };
    if (!id) {
    }
    const disable = qty === 1 ? true : false;
    // const largeClassNme = large ? 'large' : '';

    return (
        <div className={cx('qty-btn-group', { large: large })}>
            <button className={cx('qty-minus', { large: large, disable: disable })} onClick={handleMinus}>
                -
            </button>
            <input type="text" className={cx('qty-number', { large: large })} value={qty} onChange={handleChange} />
            <button className={cx('qty-plus', { large: large })} onClick={handlePlus}>
                +
            </button>
        </div>
    );
}

export default ButtonQty;
