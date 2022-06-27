import className from 'classnames/bind';
import styles from './HomeTitleSection.module.scss';

const cx = className.bind(styles);

function HomeTitleSection({ bold, children }) {
    return <h2 className={cx('title-block', { bold })}>{children}</h2>;
}

export default HomeTitleSection;
