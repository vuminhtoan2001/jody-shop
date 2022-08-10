import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.scss';

function Input(props) {
    const {
        className,
        name,
        placeholder = ' ',
        label,
        type,
        handleChange,
        error,
        fontIcon,
        handleShowHidePassword,
    } = props;

    return (
        <div className={`form-field ${error && 'invalid'}`}>
            <input
                type={type || 'text'}
                className={`form-input ${className ?? className}`}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <label className="form-label">{label}</label>
            <span className="form-message">{error}</span>
            <FontAwesomeIcon icon={fontIcon} onClick={handleShowHidePassword} />
        </div>
    );
}

export default Input;
