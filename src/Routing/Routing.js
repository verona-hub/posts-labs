import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import Posts from '../components/Posts/Posts';
import Post from '../components/Posts/Post';
import Comments from '../components/Posts/Comments/Comments';


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
                element={ <Comments />}
            />
        </Routes>
    );
};


export default Routing;
