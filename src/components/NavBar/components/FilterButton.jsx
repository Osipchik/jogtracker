import React, {useContext} from "react";
import {IconButton} from "../../Buttons";
import FilterContext from "../../../contexts/FilterContext";
import {Filter, FilterActive} from "../../../Icons";


function FilterButton() {
    const { isOpen, toggleFilter } = useContext(FilterContext);

    return (
        <IconButton onClick={toggleFilter}>
            {isOpen
                ? <FilterActive/>
                : <Filter/>
            }
        </IconButton>
    )
}


export default FilterButton;