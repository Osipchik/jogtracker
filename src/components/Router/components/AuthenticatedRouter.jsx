import React, { Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";
import {
    AddJogPage,
    EditJogPage,
    EmptyJogPage,
    InfoPage,
    JogsPage
} from "../../../pages";


function AuthenticatedRouter() {
    return (
        <Fragment>
            <Route exact path="/">
                <Redirect to="/jogs"/>
            </Route>

            <Route exact path="/jogs">
                <JogsPage />
            </Route>

            <Route path="/add">
                <AddJogPage/>
            </Route>

            <Route path="/edit/:id">
                <EditJogPage/>
            </Route>


            <Route path="/info">
                <InfoPage/>
            </Route>

            <Route path="/jogs/empty">
                <EmptyJogPage/>
            </Route>

            <Route path="*">
                <Redirect to="/jogs"/>
            </Route>
        </Fragment>
    )
}


export default AuthenticatedRouter;