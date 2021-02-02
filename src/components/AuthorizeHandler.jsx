import React, { useEffect, useRef, useState } from "react";
import Api, { setToken } from "../api";
import { config } from "../api/config";
import AuthorizeContext from "../contexts/AuthorizeContext";


function AuthorizeHandler({children}) {
    let storedToken = JSON.parse(localStorage.getItem('token'));
    setToken(storedToken);
    const [isAuth, setAuth] = useState(false);

    const timer = useRef();

    const createTimer = (delay) => {
        timer.current = setTimeout(() => {
            localStorage.removeItem('token');
            setToken(null);
            setAuth(false);
        }, delay)
    }

    const clearTimer = () => {
        clearTimeout(timer.current);
    }


    useEffect(() => {

        if (!isAuth) {
            clearTimer();
        }

        let expires = config.expiresIn - Date.now();

        if (expires > 0) {
            clearTimer();
            createTimer(expires);
            setAuth(true);
        }

    }, [isAuth]);


    const authorize = async () => {
        let newToken = await Api.auth.uuidLogin();
        if (newToken) {
            newToken.expires_in = Date.now() + newToken.expires_in;

            localStorage.setItem('token', JSON.stringify(newToken));
            setToken(newToken);
            setAuth(true);
        }
    }

    const value = {
        isAuth,
        authorize
    }

    return (
        <AuthorizeContext.Provider value={value}>
            {children}
        </AuthorizeContext.Provider>
    )
}


export default AuthorizeHandler;