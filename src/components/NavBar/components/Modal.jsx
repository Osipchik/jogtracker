import React, { useEffect } from "react";
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal-root');
const body = document.body;

function Modal({ children }) {
    const el = document.createElement('div');

    console.log(body)

    useEffect(() => {
        modalRoot.appendChild(el);
        body.classList.add('overflow-hide');

        return () => {
            modalRoot.removeChild(el);
            body.classList.remove('overflow-hide');
        };
    }, [])


    return ReactDOM.createPortal(
        children,
        el
    )
}


export default Modal;