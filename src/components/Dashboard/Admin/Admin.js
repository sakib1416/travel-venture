import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { passwordSignIn } from '../../Login/LoginManager';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Admin = () => {
    const {user, admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || { from: {pathname: "/"}};
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submitForm = (data) => {
        //console.log("Login clicked ", data);
        passwordSignIn(data.email, data.password)
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className ="m-5 p-5"> 
                <h1 className="ps-5">Login as a Admin</h1>
                <div className="mb-3">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" {...register("email")} placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" {...register("password")} placeholder="Password" required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div>
                <p>Want to add a new admin? <Link to="/addAdmin">Click here to add a New Admin</Link></p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;