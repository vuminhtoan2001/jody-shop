import { useState } from 'react';
import className from 'classnames/bind';
import styles from './ButtonQty.module.scss';

const cx = className.bind(styles);

function ButtonQty() {
    const [qty, setQty] = useState(1);
    const handlePlus = () => setQty(+qty + 1);
    const handleMinus = () => {
        if (qty < 2) return;
        console.log(qty);
        setQty(qty - 1);
    };

    return (
        <div className={cx('qty-btn-group')}>
            <button className={cx('qty-minus')} onClick={handleMinus}>
                -
            </button>
            <input type="text" className={cx('qty-number')} value={qty} onChange={(e) => setQty(e.target.value)} />
            <button className={cx('qty-plus')} onClick={handlePlus}>
                +
            </button>
        </div>
    );
}

export default ButtonQty;
