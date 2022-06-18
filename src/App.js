import React, { useState } from 'react';
// CSS
import './App.css';
// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Posts from './components/Posts/Posts';


const App = () => {

    /// Initial State Management
    const [data, setData] = useState(null);

    return (
        <MyStateManagement.Provider value={{
            data, setData
        }}>
            <div className="App">
                <Posts />
            </div>
        </MyStateManagement.Provider>
    );
};


export default App;

