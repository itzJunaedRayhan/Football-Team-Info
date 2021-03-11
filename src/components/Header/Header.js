import React from 'react';
import header from '../../images/header.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={header} alt=""/>
            <div className="header-text">
                <h2>Find Your Favorite Team Information</h2>
            </div>
        </div>
    );
};

export default Header;