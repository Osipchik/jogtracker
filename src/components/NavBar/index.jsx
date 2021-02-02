import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, LogoSmIcon } from '../../Icons';
import Links from "./components/Links";
import FilterButton from "./components/FilterButton";
import Menu from "./components/Menu";
import AuthorizeContext from "../../contexts/AuthorizeContext";
import '../../styles/navbar.css';


function NavBar() {
    const { isAuth } = useContext(AuthorizeContext);


    return (
        <Fragment>
            <nav className="nav-bar navbar">
                <Link to="/" className="logo">
                    <LogoIcon className="sm-hide"/>
                    <LogoSmIcon className="md-hide"/>
                </Link>

                {isAuth && (
                    <div className="nav-bar">
                        <Links className="sm-hide"/>

                        <FilterButton className=""/>

                        <Menu/>
                    </div>
                )}
            </nav>
        </Fragment>
    )
}

export default NavBar;