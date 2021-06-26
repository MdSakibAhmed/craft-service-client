import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <section style={{background:"gray"}} className="">
            <div className="container">

            <div style={{fontSize:"50px",verticalAlign:"middle"}} className="headline text-center ">
                <h1 className="text-white pt-4">Air Craft Service Solution</h1>
            </div>
            <div className="navbar">
                <Link to="/" style={{fontSize:"25px"}} className="text-white bold "> Home</Link>
            </div>
                
            </div>
        </section>
    );
};

export default Header;