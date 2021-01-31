import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from "clsx";


function Links({className, onClick}) {

    return (
        <div className={clsx('d-flex', className)}>
            <NavLink to="/jogs" activeClassName="active-link" onClick={onClick}>
                JOGS
            </NavLink>

            <NavLink to="/info" activeClassName="active-link" onClick={onClick}>
                INFO
            </NavLink>

            <NavLink to="/contact" activeClassName="active-link" onClick={onClick}>
                CONTACT US
            </NavLink>
        </div>
    )
}


export default Links;