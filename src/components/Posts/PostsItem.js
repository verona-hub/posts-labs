import React from 'react';
import { Link } from "react-router-dom";


const PostsItem = ({ item }) => {

    return (
        <article className="PostsItem">
            <Link to={`/posts/${item.id}`} target='_blank' rel='noopener noreferrer'>
                <h2> { item.title } </h2>
            </Link>
            <p> { item.body } </p>
        </article>
    );
};


export default PostsItem;
