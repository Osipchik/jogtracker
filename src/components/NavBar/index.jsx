import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, LogoSmIcon } from '../../Icons';
import Links from "./components/Links";
import FilterButton from "./components/FilterButton";
import Menu from "./components/Menu";
import '../../styles/navbar.css';


function NavBar() {
    return (
        <Fragment>
            <nav className="nav-bar navbar">
                <Link to="/login" className="logo">
                    <LogoIcon className="sm-hide"/>
                    <LogoSmIcon className="md-hide"/>
                </Link>

                <div className="nav-bar">
                    <Links className="sm-hide"/>

                    <FilterButton className=""/>

                    <Menu/>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;