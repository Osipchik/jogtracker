import React from 'react';
import { Route, Redirect } from "react-router-dom";


function LoginRouter() {
    return (
        <Route path="*" >
            <Redirect to="/login"/>
        </Route>
    )
}


export default LoginRouter;