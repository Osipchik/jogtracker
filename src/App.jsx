import React from 'react';
import Router from "./components/Router";
import FilterBarHandler from "./components/FilterBarHandler";
import AuthorizeHandler from "./components/AuthorizeHandler";
import {Provider} from "react-redux";
import store from './store/store';



function App() {
    return (
        <Provider store={store}>
            <FilterBarHandler>
                <AuthorizeHandler>
                    <div className="container">
                        <Router/>
                    </div>
                </AuthorizeHandler>
            </FilterBarHandler>
        </Provider>
    )
}


export default App;