import React from 'react';
import Image1 from '../Images/4k image.jpeg';

const HeroSection = () => {
    return (
        <>
            <section className="heroSection">
                <div className="titleBar">
                    <h3>Lorem, ipsum dolor.</h3>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quas fugiat eveniet labore necessitatibus. Soluta reiciendis aspernatur commodi mollitia quia. A blanditiis nesciunt, dolor doloremque dolorum perspiciatis ratione corporis culpa?</p>
                </div>
                <div className="imageBar">
                    <img width={'100%'} src={Image1} alt="" />
                </div>
            </section>
        </>
    );
};


export default HeroSection;