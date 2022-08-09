import './Input.scss';

function Input({ className, name, placeholder = ' ', label, type, handleChange, error }) {
    return (
        <div className={`form-field ${error && 'invalid'}`}>
            <input
                type="text"
                className={`form-input ${className ?? className}`}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <label className="form-label">{label}</label>
            <span className="form-message">{error}</span>
        </div>
    );
}

export default Input;
