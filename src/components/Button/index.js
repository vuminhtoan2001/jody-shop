import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './Button.module.scss';

const cx = className.bind(styles);

function Button({ to, href, primary, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('base-btn', {
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default Button;
