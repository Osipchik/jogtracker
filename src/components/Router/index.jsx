import React, { useContext } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from "../NavBar";
import AuthorizeContext from "../../contexts/AuthorizeContext";
import AuthenticatedRouter from './components/AuthenticatedRouter';
import { LoginPage } from "../../pages";
import LoginRouter from "./components/LoginRouter";



function Router() {
    const { isAuth } = useContext(AuthorizeContext);

    return (
        <BrowserRouter >
            <NavBar/>

            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                {isAuth 
                    ? <AuthenticatedRouter />
                    : <LoginRouter />
                }
            </Switch>
        </BrowserRouter>
    )
}


export default Router;