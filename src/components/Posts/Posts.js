import React, { useEffect, useContext } from 'react';
import axios from "axios";
// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import PostsItem from './PostsItem';


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
            try {
                const response = await axios(config);
                console.log(response);
                setData(response.data)
            } catch(err) {
                console.log(err);
            }
        };

        fetchData().then();
    }, []);


    return (
        <main className="Posts">
            {
                data.map( item => (
                    <PostsItem
                        item={ item }
                        key={ item.id }
                    />
                ))
            }
        </main>
    );
};


export default Posts;
