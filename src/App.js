import React from 'react';
// CSS
import './App.css';
// Context
import { MyStateManagement } from './components/Context/MyStateManagement';


const App = () => {
    return (
        <MyStateManagement.Provider value={{}}>
            <div className="App">
                This is my App
            </div>
        </MyStateManagement.Provider>
    );
};


export default App;

