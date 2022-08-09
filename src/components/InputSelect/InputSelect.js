import './inputSelect.scss';

function InputSelect({ label, name, data, handleProvinces, handleDistricts, handleWards, disabled, error }) {
    return (
        <div className={`form-field ${error && 'invalid'}`}>
            <select
                className="form-select"
                name={name}
                onChange={handleProvinces || handleDistricts || handleWards}
                disabled={disabled}
            >
                <option value={false}>---</option>
                {data &&
                    data.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
            </select>
            <label htmlFor className="form-label select">
                {label}
            </label>
            <span className="form-message">{error}</span>
        </div>
    );
}

export default InputSelect;
