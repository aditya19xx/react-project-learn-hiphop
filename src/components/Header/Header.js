import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
            <h1 className="title">Learn <span className="title-span">Hip Hop</span> </h1>
            </div>
         <div className="nav-bar">
         <Link to="/home"><button>Home</button></Link>
         <Link to="/about"><button>ABout us</button></Link>
         <Link to="/services"><button>Our Services</button></Link>
         <Link to="/contact"><button>Contact us</button></Link>
         </div>
        </div>
    );
};

export default Header;












{/* <Link to="/home"> <button>Home</button> </Link>
           <Link to="/about"> <button>About us</button> </Link>
           <Link to="/services"> <button>Our Services</button> </Link>
           <Link to="/contact"> <button>Contact us</button> </Link> */}