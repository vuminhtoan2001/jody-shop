import className from 'classnames/bind';
import styles from './SearchProductItem.module.scss';

const cx = className.bind(styles);

function SearchProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img
                    src="https://bizweb.sapocdn.net/thumb/compact/100/438/408/products/smn5076-bee-4.jpg?v=1653623821000"
                    alt=""
                />
            </div>
            <div className={cx('info')}>
                <div className={cx('title')}>Áo sơ mi nữ Visco tay dài thoáng mát </div>
                <div className={cx('price')}>399.000đ</div>
            </div>
        </div>
    );
}

export default SearchProductItem;
