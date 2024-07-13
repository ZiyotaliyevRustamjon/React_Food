import React from 'react';

const HeaderBar = () => {
    return (
        <>
            <header className="headerBar">
                <div className="logo">
                    <a href="#"><h1>LOGO</h1></a>
                </div>

                <nav className="navBar">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Partfolio</a>
                    <a href="#">Profile</a>
                    <a href="#">About</a>
                </nav>
            </header>
        </>
    );
};


export default HeaderBar;