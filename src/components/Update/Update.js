import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useForm } from "react-hook-form";


const Update = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    //getting the service id
    const {id} = useParams();
    const [updateData, setUpdateData] = useState({});
    //fetching the service and setting the data using useState
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setUpdateData(data))
    }, [])
    // const updateService = (id) => {
    //     console.log("Update clicked ", id);
    //     //getting values from the input field
    //     const name = document.getElementById("name").value;
    //     const price = document.getElementById("price").value;
    //     const description = document.getElementById("description").value;
    //     ///putting them together in a object
    //     const service = {name, price, description};
    //     console.log(service);
    //     //fetching with the PATCH method
    //     fetch("http://localhost:5000/update/"+id, {
    //         method: "PATCH",
    //         headers: {'Content-type': 'application/json'},
    //         body: JSON.stringify(service)
    //     })
    //     .then(response => response.json())
    //     .then(updatedFinally => alert("Updated service"))
    // }
    const onSubmit = data => {
        const service = {
            name: data.name,
            price: data.price,
            description: data.description
        };
        console.log(service);
        fetch("https://floating-coast-84242.herokuapp.com/update/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(service)
        })
        .then(response => response.json())
        .then(updatedFinally => {
            alert("Updated service");
            history.push("/service/"+id)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 mb-5">
                <h1>Update service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                package
                <input className="ms-1" type="text" defaultValue={updateData.packageName} {...register('name')} id="name" />
                <br />
                <label htmlFor="">Package Price: </label>
                <input className="ms-1" type="text" defaultValue={updateData.packagePrice} {...register('price')} id="price"/>
                <br />
                <label htmlFor="">Package Description: </label>
                <input className="ms-1" type="text" defaultValue={updateData.packageDescription} {...register('description')} id="description"/>
                <br />
                <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;