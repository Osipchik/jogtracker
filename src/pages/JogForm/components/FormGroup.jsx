import React from 'react';


function FormGroup({displayName, defaultValue, type, name, step = "1", min}) {
    return (
        <div className="form-group d-flex">
            <label className="form-group-label" htmlFor={displayName}>
                {displayName}
            </label>

            <input
                className="form-group-input"
                type={type}
                name={name}
                defaultValue={defaultValue}
                step={step}
                required
                min={min}
            />
        </div>
    )
}


export default FormGroup;