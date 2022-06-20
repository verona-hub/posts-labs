import React, { useEffect, useContext } from 'react';
import axios from "axios";
// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import PostsItem from './PostsItem';
import Search from '../Search/Search';


const Posts = ({ propsMessage, componentName }) => {

    console.log(propsMessage, componentName);

    // Import state from Context
    const { search, posts, setPosts } = useContext(MyStateManagement);

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
                setPosts(response.data)
            } catch(err) {
                console.log(err);
            }
        };

        fetchData().then();
    }, []);


    return (
        <main className="Posts">
            <Search />
            <section className='filtered-posts'>
                {
                    posts
                        .filter( item => item.title.toLowerCase().includes(search.toLowerCase()) && item )
                        .map( item =>
                            <PostsItem
                                item={ item }
                                key={ item.id }
                                propsMessage='Hello from'
                                componentName='PostsItem component'
                            />
                        )
                }
            </section>
        </main>
    );
};


export default Posts;
