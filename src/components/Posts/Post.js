import React from 'react';


const Post = ({ item }) => {
    return (
        <section className="Post">
            <h2> { item.title } </h2>
            <p> User Id: { item.userId } </p>
            <p> { item.body } </p>
        </section>
    );
};


export default Post;
