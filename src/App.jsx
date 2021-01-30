import React from 'react';
import Router from "./components/Router";
import FilterBarHandler from "./components/FilterBarHandler";


function App() {
    return (
        <FilterBarHandler>
            <div className="container">
                <Router/>
            </div>
        </FilterBarHandler>
    )
}


export default App;