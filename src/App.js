import React, { useState } from 'react';
// CSS
import './App.css';
// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Header from './components/Header';
import Routing from './Routing/Routing';
import Posts from './components/Posts/Posts';


const App = () => {

    /// Initial State Management
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [dataPost, setDataPost] = useState([]);
    const [comments, setComments] = useState([]);

    return (
        <MyStateManagement.Provider value={{
            search, setSearch,
            posts, setPosts,
            dataPost, setDataPost,
            comments, setComments
        }}>
            <div className="App">
                <Header
                    propsMessage='Hello from'
                    componentName='Posts component'
                />
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

