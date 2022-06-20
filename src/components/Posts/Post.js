import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import Comments from './Comments/Comments';


const Post = () => {

    // Import state from Context
    const { dataPost, setDataPost } = useContext(MyStateManagement);

    const { id } = useParams();
    const navigate = useNavigate();


    // API config
    const config = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json charset=UTF-8'
        }
    };

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(config);
                setDataPost(response.data)
            } catch(err) {
                console.log(err);
            }
        };

        fetchData().then();
    }, []);

    return (
        <article className="Post">
            <div className="post-content">
                <h2> { dataPost.title } </h2>
                <p> { dataPost.body } </p>
            </div>

            <Comments
                propsMessage='Hello from'
                componentName='Comments component'
            />

            <button onClick={() => navigate('/')}> Go Home </button>
        </article>
    );
};


export default Post;
