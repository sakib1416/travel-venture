import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Update = () => {
    //getting the service id
    const {id} = useParams();
    const [updateData, setUpdateData] = useState({});
    //fetching the service and setting the data using useState
    useEffect(()=>{
        fetch("http://localhost:5000/service/"+id)
        .then(response => response.json())
        .then(data => setUpdateData(data))
    }, [])
    const updateService = (id) => {
        console.log("Update clicked ", id);
        //getting values from the input field
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        ///putting them together in a object
        const service = {name, price, description};
        console.log(service);
        //fetching with the PATCH method
        fetch("http://localhost:5000/update/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(service)
        })
        .then(response => response.json())
        .then(updatedFinally => alert("Updated service"))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 mb-5">
                <h1>Update service</h1>
                package
                <input className="ms-1" type="text" placeholder={updateData.packageName} id="name" />
                <br />
                <label htmlFor="">Package Price: </label>
                <input className="ms-1" type="text" placeholder={updateData.packagePrice} id="price"/>
                <br />
                <label htmlFor="">Package Description: </label>
                <input className="ms-1" type="text" placeholder={updateData.packageDescription} id="description"/>
                <br />
                <button onClick={()=>{updateService(updateData._id)}} className="btn btn-primary">Submit</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;