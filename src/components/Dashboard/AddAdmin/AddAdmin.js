import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    const handleBlur = (e) => {
        //updating newInfo with previous info
        const newInfo = {...info};
        //getting the value for name and email separately 
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        //getting the uploaded file
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        //creating the formData and appending file and name and email from the info object 
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        //fetching the API from backend, note that there is no JSON.stringify because for file you can not  do that
        fetch('https://floating-coast-84242.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Add an Admin</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Choose Image</label>
                    <input onChange={handleFileChange} type="file" class="form-control" placeholder="Picture"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddAdmin;