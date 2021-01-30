import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from "../NavBar";
import Login from "../../pages/Ligin";


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
                        <div>Jogs</div>
                    </Route>

                    <Route path="/jogs/add">
                        <div>AddJog</div>
                    </Route>

                    <Route path="/jogs/edit/:id">
                        <div>JogEdit</div>
                    </Route>


                    <Route path="/info">
                        <div>Info</div>
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