import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


function Router() {
    const isAuthorized = true;

    return (
        <BrowserRouter >
            <div>nav</div>

            <div className="main">
                <Switch>
                    {isAuthorized
                        ? <Route exact path="/" render={() => <Redirect to="/jogs" />} />
                        : <Route exact path="/" render={() => <Redirect to="/login" />} />
                    }

                    <Route path="/login">
                        <div>Login</div>
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