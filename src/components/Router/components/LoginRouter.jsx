import React from 'react';
import { Route, Redirect } from "react-router-dom";



function LoginRouter() {
    return (
        <Route path="*" render={() => <Redirect to="/login"/>} />
    )
}


export default LoginRouter;