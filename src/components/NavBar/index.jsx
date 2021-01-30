import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, FilterActive } from '../../Icons';
import Filter from "./components/Filter";
import Links from "./components/Links";
import '../../styles/navbar.css';
import {IconButton} from "../Buttons";


function NavBar() {
    const [open, setOpen] = useState(false);

    const onFilterClick = () => {
        setOpen(!open);
    }

    return (
        <Fragment>
            <nav className="nav-bar navbar">
                <Link to="/login" className="logo">
                    <Logo/>
                </Link>
                <div className="nav-bar">
                     <Links/>

                    <IconButton onClick={onFilterClick}>
                        <FilterActive/>
                    </IconButton>
                </div>
            </nav>
            {open && <Filter />}
        </Fragment>
    )
}

export default NavBar;