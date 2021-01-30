import React from 'react';
import clsx from "clsx";

function IconButton({className, children, onClick}) {
    return (
        <button className={clsx('icon-button', className)} onClick={onClick}>
            {children}
        </button>
    )
}


export default IconButton;