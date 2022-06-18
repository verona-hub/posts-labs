import React, { useEffect, useContext } from 'react';
import axios from "axios";
// Context
import { MyStateManagement } from '../../components/Context/MyStateManagement';
// Components
import Post from './Post';


const Posts = () => {

    // Import state from Context
    const { data, setData } = useContext(MyStateManagement);

    // API config
    const config = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json charset=UTF-8'
        }
    };

    // API request
    useEffect( () => {
        const fetchData = async () => {
            const response = await axios(config);
            console.log(response);
            setData(response.data);
        };
        fetchData().then();
    }, []);


    return (
        <div>
            <h2> This is Posts Component </h2>
            <Post />
        </div>
    );
};


export default Posts;
