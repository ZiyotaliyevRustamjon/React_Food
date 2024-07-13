import React from 'react';

const Modal = (props, modalClose) => {
    return (
        <>
            <div className="modalBg">
                <div className="modalEl">
                    {props.children}
                    <button onClick={props.modalClose}>Close</button>
                </div>
            </div>
        </>
    );
};


export default Modal;