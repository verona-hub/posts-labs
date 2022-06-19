import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import App from '../App';
import Posts from '../components/Posts/Posts';
import Post from '../components/Posts/Post';

const Routing = () => {
    return (
        <Routes>
            <Route
                exact path='/'
                element={ <App />}
            />
            <Route
                path='post/:id'
                element={ <Post />}
            />
        </Routes>
    );
};


export default Routing;
