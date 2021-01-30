import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


function Links() {
    return (
        <Fragment>
            <NavLink to="/jogs" activeClassName="active-link">
                JOGS
            </NavLink>

            <NavLink to="/info" activeClassName="active-link">
                INFO
            </NavLink>

            <NavLink to="/contact" activeClassName="active-link">
                CONTACT US
            </NavLink>
        </Fragment>
    )
}


export default Links;