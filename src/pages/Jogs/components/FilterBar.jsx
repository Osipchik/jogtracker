import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import DateForm from "./DateForm";
import FilterContext from "../../../contexts/FilterContext";


function FilterBar({ onFilter }) {
    const { isOpen } = useContext(FilterContext);
    const [dateRange, setDateRange] = useState({});

    const onSelectMin = useCallback((date) => {
        setDateRange({...dateRange, min: date});
    });

    const onSelectMax = useCallback((date) => {
        setDateRange({...dateRange, max: date});
    });

    useEffect(() => {
        if (dateRange.hasOwnProperty('min') && dateRange.hasOwnProperty('max')) {
            onFilter({min: dateRange.min.valueOf(), max: dateRange.max.valueOf()});
        }
    }, [dateRange]);

    useEffect(() => {
        onFilter(null);
        setDateRange({});
    }, [isOpen]);

    return (
        <Fragment>
            {isOpen && (
                <div className="filter">
                    <DateForm label="Data from" onSelect={onSelectMin} value={dateRange.min}/>
                    <DateForm label="Data to" onSelect={onSelectMax} value={dateRange.max}/>
                </div>
            )}
        </Fragment>
    )
}

export default React.memo(FilterBar);