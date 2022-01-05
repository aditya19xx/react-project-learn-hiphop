import React from 'react';
import '../Home/Home.css';

import logo3 from '../../img/home header3.png';


import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    return (
        <div className="home-text">
            <img className="header-img" src={logo3} alt="" />
            <h1>Welcome to Hip Hop learning zone</h1>
            <hr className="w-50"/>
            <div>
                <h3 className="mt-5">Here is what we offer</h3>
                
                <div>
                    <HomeCard></HomeCard>
                </div>
                
            </div>
        </div>
       
    );
};

export default Home;