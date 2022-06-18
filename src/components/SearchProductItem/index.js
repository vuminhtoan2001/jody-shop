import className from 'classnames/bind';
import styles from './SearchProductItem.module.scss';

const cx = className.bind(styles);

function SearchProductItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={data.thumb} alt="" />
            </div>
            <div className={cx('info')}>
                <div className={cx('title')}>{data.title}</div>
                <div className={cx('price')}>{data.price}</div>
            </div>
        </div>
    );
}

export default SearchProductItem;
