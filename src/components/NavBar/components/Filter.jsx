import React from 'react';
import DateForm from "./DateForm";


function Filter() {
    return (
        <div className="filter">
            <DateForm label="Data from"/>
            <DateForm label="Data to"/>
        </div>
    )
}

export default Filter;