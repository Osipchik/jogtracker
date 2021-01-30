import React from 'react';
import '../../../styles/date-form.css';


function DateForm({label}) {
    return (
        <div className="data-form">
            <label className="label">
                {label}
            </label>
            <input type="date" className="input"/>
        </div>
    )
}

export default DateForm;