import React, { useState } from "react";
import AuthorizeContext from "../contexts/AuthorizeContext";


function AuthorizeHandler({children}) {
    const [isAuth, setAuth] = useState(localStorage.getItem('token'));

    const authorize = (token) => {
        setAuth(true);
        localStorage.setItem('token', 'token');
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