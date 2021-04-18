import React, { useContext } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleButton from 'react-google-button';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn } from './LoginManager';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || { from: {pathname: "/"}};
    const googleSignIn = () => {
        console.log("sign in clicked");
        handleGoogleSignIn()
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        })
    }
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <h1>This is the login page</h1>
            <GoogleButton
                style ={{marginLeft: '550px'}} onClick={googleSignIn}
            />
            <Footer></Footer>
        </div>
    );
};

export default Login;