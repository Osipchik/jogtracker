import React, {Fragment, useContext} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from "../NavBar";
import Login from "../../pages/Ligin";
import Info from "../../pages/Info";
import Jogs from "../../pages/Jogs";
import EmptyJog from "../../pages/EmptyJog/intex";
import {AddJog, EditJog} from "../../pages/JogForm";


function Router() {
    const isAuthenticate = true;


    return (
        <BrowserRouter >
            <NavBar/>

            <Switch>
                {isAuthenticate
                    ? <Route exact path="/" render={() => <Redirect to="/jogs" />} />
                    : <Route exact path="/" render={() => <Redirect to="/login" />} />
                }

                <Route path="/login">
                    <Login/>
                </Route>


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
            </Switch>
        </BrowserRouter>
    )
}


export default Router;