import React from 'react';
import './MenuList.css'
import Logo from '../../images/Logo.png'
const MenuList = () => {
    return (
        <div className='menu'>
            <div className="brand">
                <a href="https://www.facebook.com/JKwebGenesis" target="_blank" rel="noreferrer">
                    <img src={Logo} alt=""/>
                </a>
            </div>
            <div className="menu-right">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/leagues">Leagues</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuList;