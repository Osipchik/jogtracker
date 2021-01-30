import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../../Icons';
import Links from "./components/Links";
import '../../styles/navbar.css';
import FilterButton from "./components/FilterButton";


function NavBar() {
    return (
        <Fragment>
            <nav className="nav-bar navbar">
                <Link to="/login" className="logo">
                    <Logo/>
                </Link>
                <div className="nav-bar">
                    <Links/>

                    <FilterButton/>
                </div>
            </nav>

        </Fragment>
    )
}

export default NavBar;