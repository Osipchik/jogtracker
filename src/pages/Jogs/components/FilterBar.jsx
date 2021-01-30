import React, {Fragment, useContext} from 'react';
import DateForm from "./DateForm";
import FilterContext from "../../../contexts/FilterContext";


function FilterBar() {
    const { isOpen } = useContext(FilterContext);

    return (
        <Fragment>
            {isOpen && (
                <div className="filter">
                    <DateForm label="Data from"/>
                    <DateForm label="Data to"/>
                </div>
            )}
        </Fragment>
    )
}

export default FilterBar;