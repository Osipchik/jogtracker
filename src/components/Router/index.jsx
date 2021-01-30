import React from 'react';
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


function Router() {
    const isAuthorized = true;

    return (
        <BrowserRouter >
            <NavBar/>

            <div className="main">
                <Switch>
                    {isAuthorized
                        ? <Route exact path="/" render={() => <Redirect to="/jogs" />} />
                        : <Route exact path="/" render={() => <Redirect to="/login" />} />
                    }

                    <Route path="/login">
                        <Login/>
                    </Route>


                    <Route exact path="/jogs">
                        <Jogs/>
                    </Route>

                    <Route path="/jogs/add">
                        <div>AddJog</div>
                    </Route>

                    <Route path="/jogs/edit/:id">
                        <div>JogEdit</div>
                    </Route>


                    <Route path="/info">
                        <Info/>
                    </Route>

                    <Route path="/jogs/empty">
                        <div>EmptyJog</div>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default Router;