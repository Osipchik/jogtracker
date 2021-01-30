import React from 'react';


function FormGroup({displayName, defaultValue}) {
    return (
        <div className="form-group d-flex">
            <label className="form-group-label" htmlFor={displayName}>
                {displayName}
            </label>

            <input
                className="form-group-input"
                name={displayName}
                defaultValue={defaultValue}
            />
        </div>
    )
}


export default FormGroup;