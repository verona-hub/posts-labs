import React from 'react';
import { Link } from "react-router-dom";


const Header = ({ propsMessage, componentName }) => {

    console.log(propsMessage, componentName);

    return (
        <Link to='/' rel='noopener noreferrer' className='title'>
            <h1 > Posts Website </h1>
        </Link>
    );
};


export default Header;
