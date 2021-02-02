import React, { useEffect, useRef, useState } from "react";
import Api, { setToken } from "../api";
import { config } from "../api/config";
import AuthorizeContext from "../contexts/AuthorizeContext";


function isTokeValid(token) {
    return (token.expiresIn - Date.now()) > 0;
}


function AuthorizeHandler({children}) {
    let storedToken = JSON.parse(localStorage.getItem('token'));
    setToken(storedToken);

    const [isAuth, setAuth] = useState(isTokeValid(config));

    const timer = useRef();

    const createTimer = () => {
        timer.current = setTimeout(() => {
            localStorage.removeItem('token');
            setToken(null);
            setAuth(false);
        }, config.expiresIn - Date.now())
    }

    const clearTimer = () => {
        clearTimeout(timer.current);
    }

    useEffect(() => {

        clearTimer();

        if (isTokeValid(config)) {
            createTimer();
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