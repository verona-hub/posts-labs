import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate  } from "react-router-dom";
// Context
import { MyStateManagement } from '../Context/MyStateManagement';
import axios from "axios";


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
                console.log(response.data);
                setDataPost(response.data)
            } catch(err) {
                console.log(err);
            }
        };

        fetchData().then();
    }, []);

    return (
        <article>
            <h1>{dataPost.title}</h1>
            <p>{dataPost.body}</p>
            <br />
            {/*<button onClick={() => navigate('/')}> Go back </button>*/}
        </article>
    );
};


export default Post;
