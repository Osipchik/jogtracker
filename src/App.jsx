import React from 'react';
import Router from "./components/Router";
import FilterBarHandler from "./components/FilterBarHandler";
import AuthorizeHandler from "./components/AuthorizeHandler";


function App() {
    return (
        <FilterBarHandler>
            <AuthorizeHandler>
                <div className="container">
                    <Router/>
                </div>
            </AuthorizeHandler>
        </FilterBarHandler>
    )
}


export default App;