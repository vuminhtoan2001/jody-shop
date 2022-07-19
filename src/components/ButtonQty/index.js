import { useState } from 'react';
import className from 'classnames/bind';
import styles from './ButtonQty.module.scss';

const cx = className.bind(styles);

function ButtonQty({ large }) {
    const [qty, setQty] = useState(1);
    const handlePlus = () => setQty(+qty + 1);
    const handleMinus = () => {
        if (qty < 2) return;
        console.log(qty);
        setQty(qty - 1);
    };

    // const largeClassNme = large ? 'large' : '';

    return (
        <div className={cx('qty-btn-group', { large: large })}>
            <button className={cx('qty-minus', { large: large })} onClick={handleMinus}>
                -
            </button>
            <input
                type="text"
                className={cx('qty-number', { large: large })}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
            />
            <button className={cx('qty-plus', { large: large })} onClick={handlePlus}>
                +
            </button>
        </div>
    );
}

export default ButtonQty;
