import React, {Fragment, useContext} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from "../NavBar";
import Login from "../../pages/Login";
import Info from "../../pages/Info";
import Jogs from "../../pages/Jogs";
import EmptyJog from "../../pages/EmptyJog/index";
import { AddJog, EditJog } from "../../pages/JogForm";
import AuthorizeContext from "../../contexts/AuthorizeContext";


function Router() {
    const { isAuth } = useContext(AuthorizeContext);


    return (
        <BrowserRouter >
            <NavBar/>

            <Switch>
                <Route exact path="/" render={() => <Redirect to="/jogs" />} />

                <Route path="/login">
                    <Login/>
                </Route>


                {isAuth && (
                    <Fragment>
                        <Route exact path="/jogs">
                            <Jogs/>
                        </Route>

                        <Route path="/add">
                            <AddJog/>
                        </Route>

                        <Route path="/edit/:id">
                            <EditJog/>
                        </Route>


                        <Route path="/info">
                            <Info/>
                        </Route>

                        <Route path="/jogs/empty">
                            <EmptyJog/>
                        </Route>

                    </Fragment>
                )}
            </Switch>
        </BrowserRouter>
    )
}


export default Router;