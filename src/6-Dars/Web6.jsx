import React, { useState, useEffect } from 'react';

const Web6 = () => {

    let [data, setData] = useState([]);

    const api = () => {
        fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(res => setData(res.meals))
    }
    

    useEffect(() => {
       api()
    }, []);

    return (
        <>
            {data.map(db => (
                <div className='cardBar'>
                    <img width={'100%'} src={db.strMealThumb} alt="" />
                    <h1>{db.strMeal}</h1>
                    <p>{db.strInstructions}</p>
                    <button className='btn' onClick={api}>Next Foot</button>
                </div>
            ))}
        </>
    );
};


export default Web6;