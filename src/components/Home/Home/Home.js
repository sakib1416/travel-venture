import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import MostVisited from '../MostVisited/MostVisited';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Services></Services>
            <Reviews></Reviews>
            <SpecialOffer></SpecialOffer>
            <MostVisited></MostVisited>
            <Footer></Footer>
        </div>
    );
};

export default Home;