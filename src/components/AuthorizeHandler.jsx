import React, { useEffect, useState } from "react";
import Api, { setToken } from "../api";
import { config } from "../api/config";
import AuthorizeContext from "../contexts/AuthorizeContext";


function AuthorizeHandler({children}) {
    let storedToken = JSON.parse(localStorage.getItem('token'));
    setToken(storedToken);
    const [isAuth, setAuth] = useState(storedToken !== null);


    useEffect(() => {

        console.log(config.expiresIn - Date.now())

    }, [isAuth]);


    const authorize = async () => {
        let newToken = await Api.auth.uuidLogin();
        newToken.response.expires_in = Date.now() + newToken.response.expires_in;

        localStorage.setItem('token', JSON.stringify(newToken.response));
        setToken(newToken.response);
        setAuth(true);
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