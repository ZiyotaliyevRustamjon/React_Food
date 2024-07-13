import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
        </>
    );
};


export default NavBar;