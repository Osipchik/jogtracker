import React from 'react';
import clsx from "clsx";


function RoundedButton({displayName, className, onClick, theme = 'white', size = 'large'}) {
    return (
        <button
            className={clsx('rounded-button', `button-${theme} button-${size}`, className)}
            onClick={onClick}
        >
            <span>
                {displayName}
            </span>
        </button>
    )
}


export default RoundedButton;