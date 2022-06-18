import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import App from '../App';


const Routing = () => {
    return (
        <Routes>
            <Route
                exact path='/'
                element={ <App />}
            />
        </Routes>
    );
};


export default Routing;
