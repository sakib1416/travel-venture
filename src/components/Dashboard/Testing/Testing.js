import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Testing = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/single/service/"+id)
        .then(response => response.json())
        .then(result => setData(result));
    }, [])
    return (
        <div>
            <h1>Testing single service component</h1>
            <h4>Name: {data.packageName}</h4>
        </div>
    );
};

export default Testing;