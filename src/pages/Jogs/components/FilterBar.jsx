import React, { Fragment, useContext, useEffect, useState } from 'react';
import DateForm from "./DateForm";
import FilterContext from "../../../contexts/FilterContext";


function FilterBar({ onFilter }) {
    const { isOpen } = useContext(FilterContext);
    const [dateRange, setDateRange] = useState({});

    const onSelectMin = (e) => {
        let date = new Date(e.target.value);
        setDateRange({...dateRange, min: date.getTime()});
    }

    const onSelectMax = (e) => {
        let date = new Date(e.target.value);
        setDateRange({...dateRange, max: date.getTime()});
    }

    useEffect(() => {
        if (dateRange.hasOwnProperty('min') && dateRange.hasOwnProperty('max')) {
            onFilter(dateRange);
        }
    }, [dateRange]);

    useEffect(() => {
        onFilter(null);
    }, [isOpen]);

    return (
        <Fragment>
            {isOpen && (
                <div className="filter">
                    <DateForm label="Data from" onSelect={onSelectMin}/>
                    <DateForm label="Data to" onSelect={onSelectMax}/>
                </div>
            )}
        </Fragment>
    )
}

export default React.memo(FilterBar);