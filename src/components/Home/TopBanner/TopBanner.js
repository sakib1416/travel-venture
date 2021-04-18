import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner-container">
            <div className="text-center top-banner-main">
                <h1 className="">Explore the world with <br/> Travel Venture</h1>
                <button type="button" class="btn btn-secondary btn-lg">Let's Explore</button>
            </div>
        </div>
    );
};

export default TopBanner;