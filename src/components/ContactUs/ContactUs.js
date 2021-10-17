import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="mt-5 pt-5 text-center">Interested to contact us?</h1>
            <p className="text-center">Please leave a send us an email at: <span className="important-text">sakib1416@gmail.com</span></p>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;