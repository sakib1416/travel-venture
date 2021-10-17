import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ReviewsSection from './ReviewsSection';
import './CheckOut.css';

const CheckOut = () => {
    const history = useHistory();
    //getting the id for the cart/service
    const {id} = useParams();
    const [cart, setCart] = useState([])
    const [reviews, setReviews] = useState([]);
    //fetching the single cart/service setting the data using useState
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/service/"+id)
        .then(response => response.json())
        .then(data => setCart(data))
    },[id])
    

    //fetching the reviews for this service
    useEffect(()=>{
        fetch("https://floating-coast-84242.herokuapp.com/services/reviews/"+id)
        .then(response => response.json())
        .then(review => {
            setReviews(review);
        })
    }, [id])


    const deleteService = (id) => {
        console.log("Delete clicked!! ", id);
        //fetching with delete method
        fetch("https://floating-coast-84242.herokuapp.com/delete/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(serviceDeleted => {
            alert("Deleted Successfully");
            history.push("/");
        })
    }
    const {user, admin} = useContext(UserContext);
    const [isAdmin, setIsAdmin] = admin;
    const [loggedInUser, setLoggedInUser] = user;
    const [userChecked, setUserChecked] = useState();
    useEffect(()=>{
        const checkOrder = {orderID: id, userEmail: loggedInUser.email};
        console.log(checkOrder);
        fetch("https://floating-coast-84242.herokuapp.com/order", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkOrder)
        })
        .then(response => response.json())
        .then(order => {
            console.log(order);
            if(order){
                setUserChecked(order);
            }
        })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center m-5 p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h1>Choose your desired package</h1>
                            <h3>{cart.packageName}</h3>
                            <p>{cart.packageDescription}</p>
                            <img style={{width: '80%'}} src={cart.imageURL} alt="" />
                            
                            <h5>Package Price: {cart.packagePrice}</h5>
                            <Link to={"/shipment/"+cart._id} class="btn customButton">Book this package</Link>
                            <br />
                            {
                                (userChecked) && 
                                    <Link to={"/addReview/"+cart._id} className="btn btn-success me-2">Leave a review</Link>
                            }
                            {
                                isAdmin.isAdmin && <div className="mt-2">
                                <Link to={"/service/update/"+cart._id} className="btn btn-success me-2">Update Service</Link>
                                <button onClick={()=>{deleteService(cart._id)}} class="btn btn-danger">Delete this service</button>
                            </div>
                            }
                        </div>
                        <div className="col-md-2 review-section">
                            <div>
                                <h3>Reviews for this service</h3>
                                {
                                    reviews.map(review => <ReviewsSection review = {review}></ReviewsSection>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;