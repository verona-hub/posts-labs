import React, { useState } from 'react';
// CSS
import './App.css';
// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Routing from './Routing/Routing';
import Posts from './components/Posts/Posts';


const App = () => {

    /// Initial State Management
    const [posts, setPosts] = useState([]);
    const [dataPost, setDataPost] = useState([]);
    const [comments, setComments] = useState([]);

    return (
        <MyStateManagement.Provider value={{
            posts, setPosts,
            dataPost, setDataPost,
            comments, setComments
        }}>
            <div className="App">
                <Routing />
                <Posts
                    propsMessage='Hello from'
                    componentName='Posts component'
                />
            </div>
        </MyStateManagement.Provider>
    );
};


export default App;

