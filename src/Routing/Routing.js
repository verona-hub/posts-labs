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
                element={ <Posts />}
            />
            <Route
                path='posts/:id'
                element={ <Post />}
            />
            <Route
                path='posts/:id/comments'
                element={ <Post />}
            />
        </Routes>
    );
};


export default Routing;
