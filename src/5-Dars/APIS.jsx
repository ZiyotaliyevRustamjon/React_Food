import React, { useState } from 'react';

const APIS = () => {

    let [data, setData] = useState([]);

    const api = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => setData(res))
    }
    api()

    return (
        <>
            <div className="container">
                {data.map(db => (
                    <div className='userData'>
                        <h1>{db.name}</h1>
                        <p>{db.username}</p>
                        <p>email: <mark>{db.email}</mark></p>
                    </div>
                ))}
            </div>
        </>
    );
};


export default APIS;