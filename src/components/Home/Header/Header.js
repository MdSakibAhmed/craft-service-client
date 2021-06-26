import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <section style={{background:"gray"}} className="">
            <div className="container">

            <div style={{fontSize:"50px"}} className="headline text-center ">
                <h1 className="text-white">Air Craft Service Solution</h1>
            </div>
            <div className="navbar">
                <Link to="/" className="text-white"> Home</Link>
            </div>
                
            </div>
        </section>
    );
};

export default Header;