import React, {Fragment, useState} from "react";
import Links from "./Links";
import Modal from "./Modal";
import { CancelSmIcon, LogoSmIcon, MenuIcon} from "../../../Icons";
import { IconButton } from "../../Buttons";
import { Link } from "react-router-dom";
import '../../../styles/menu.css';


function Menu() {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }

    return (
        <Fragment>
            <IconButton className="ml-45 md-hide" onClick={onClick}>
                <MenuIcon/>
            </IconButton>
            {open && (
                <Modal>
                    <div className="navbar-menu">
                        <nav className="nav-bar navbar">
                            <Link to="/login" className="logo">
                                <LogoSmIcon className="md-hide svg-primary"/>
                            </Link>

                            <div className="nav-bar">
                                <IconButton onClick={onClick}>
                                    <CancelSmIcon className="svg-warm-grey"/>
                                </IconButton>
                            </div>
                        </nav>

                        <Links className="flex-center" onClick={onClick}/>
                    </div>
                </Modal>
            )}
        </Fragment>
    )
}

export default Menu;