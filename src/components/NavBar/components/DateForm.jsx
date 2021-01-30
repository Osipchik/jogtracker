import React from 'react';
import '../../../styles/date-form.css';


function DateForm({label}) {
    return (
        <div className="data-form">
            <span className="label">
                {label}
            </span>
            <input type="date" className="input"/>
        </div>
    )
}

export default DateForm;