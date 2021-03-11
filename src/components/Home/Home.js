import React from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import './Home.css'
import '../Teams/Teams.css'
const Home = () => {
    
    return (
        <div className="home">
            <Header/>
            <Teams/>
        </div>
    );
};

export default Home;