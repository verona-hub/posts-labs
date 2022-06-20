import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import Comment from './Comment';


const Comments = ({ propsMessage, componentName }) => {

    console.log(propsMessage, componentName);

    // Import state from Context
    const { comments, setComments } = useContext(MyStateManagement);

    const { id } = useParams();

    // API config
    const config = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json charset=UTF-8'
        }
    };

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(config);
                setComments(response.data);
            } catch(err) {
                console.log(err)
            }
        };

        fetchData().then();
    }, []);


    return (
        <section className="Comments">
            {
                comments.map(item => (
                    <Comment
                        item={ item }
                        key={item.id}
                        propsMessage='Hello from'
                        componentName='Comment component'
                    />
                ))
            }
        </section>
    );
};


export default Comments;
