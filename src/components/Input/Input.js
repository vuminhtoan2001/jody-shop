import './Input.scss';

function Input({ className, name, placeholder = ' ', label, type }) {
    return (
        <div className="form-field">
            <input
                type="text"
                className={`form-input =${className ?? className}`}
                id={name}
                name={name}
                placeholder={placeholder}
            />
            <label className="form-label">{label}</label>
            <span className="form-message" />
        </div>
    );
}

export default Input;
