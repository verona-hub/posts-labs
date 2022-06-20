import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import Post from '../components/Posts/Post';
import Comments from '../components/Posts/Comments/Comments';


const Routing = () => {
    return (
        <Routes>
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
