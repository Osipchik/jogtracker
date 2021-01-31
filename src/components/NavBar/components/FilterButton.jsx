import React, { useContext } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { IconButton } from "../../Buttons";
import FilterContext from "../../../contexts/FilterContext";
import { FilterIcon, FilterActive } from "../../../Icons";


function FilterButton({className}) {
    let location = useLocation();
    const history = useHistory();
    const { isOpen, toggleFilter } = useContext(FilterContext);

    const onToggle = () => {
        if (location.pathname !== '/jogs') {
            history.push('/jogs')
        }
        toggleFilter()
    }

    return (
        <IconButton onClick={onToggle} className={className}>
            {isOpen
                ? <FilterActive/>
                : <FilterIcon/>
            }
        </IconButton>
    )
}


export default FilterButton;