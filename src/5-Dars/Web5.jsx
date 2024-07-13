import React, { useState } from 'react';
import Modal from './Modal';
import './style.css'

const Web5 = () => {

    let [modal, setModal] = useState(false);

    const modalClose = () => {
        setModal(false);
    }

    const modalOpen = () => {
        setModal(modal = true);
    }

    return (
        <>
            <button onClick={modalOpen}>Open</button>
            {modal && <Modal modalClose={modalClose}>

                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque iste autem velit dolore. Ut, obcaecati, minus possimus impedit fuga distinctio mollitia officiis quia quis ipsa nostrum consequuntur quo rem!</p>
            
            </Modal>}
        </>
    );
};


export default Web5;