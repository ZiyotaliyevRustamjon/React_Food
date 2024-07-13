import React, { useState } from 'react';

const Web = () => {

    let [counter, setCounter] = useState(0);
    let [price, setPrice] = useState(5000);

    const plus = () => {
        setCounter(counter + 1);
    }

    const minus = () => {
        setCounter(counter - 1)
    }


    return (
        <>
            <h1>{price * counter}</h1>
            <button onClick={plus}>+ Pilus +</button>
            <button>{counter}</button>
            <button onClick={minus}>- Minus -</button>
        </>
    );
};


export default Web;