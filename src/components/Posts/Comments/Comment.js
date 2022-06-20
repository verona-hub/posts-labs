import React from 'react';


const Comment = ({ item, propsMessage, componentName }) => {

    console.log(propsMessage, componentName);

    return (
        <div className="Comment">
            <h2> Comments: </h2>
            <h4> {item.email} wrote: </h4>
            <p> {item.body} </p>
        </div>
    );
};


export default Comment;
