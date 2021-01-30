import React, { useState } from "react";
import FilterContext from "../contexts/FilterContext";


function FilterBarHandler({children}) {
    const [open, setOpen] = useState(false);

    const toggleFilter = () => {
        setOpen(!open);
    }

    const value = {
        isOpen: open,
        toggleFilter: toggleFilter
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}


export default FilterBarHandler;