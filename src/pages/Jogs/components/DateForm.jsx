import React from 'react';
import DatePicker from 'react-datepicker';
import '../../../styles/date-form.css';
import 'react-datepicker/dist/react-datepicker.css';


function DateForm({ label, onSelect, value }) {
    return (
        <div className="data-form" >
            <label className="label">
                {label}
            </label>
            <DatePicker 
                className="input"
                selected={value}
                showYearDropdown={true} 
                onChange={onSelect}
            />
        </div>
    )
}

export default DateForm;