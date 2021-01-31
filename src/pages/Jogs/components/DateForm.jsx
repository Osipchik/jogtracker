import React from 'react';
import '../../../styles/date-form.css';


function DateForm({ label, onSelect }) {

    return (
        <div className="data-form" >
            <label className="label">
                {label}
            </label>
            <input type="date" className="input" onChange={onSelect}/>
        </div>
    )
}

export default DateForm;