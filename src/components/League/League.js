import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './League.css'
import card from '../../images/card.png'
import { Link } from 'react-router-dom';


const League = (props) => {
    const {strLeague, strSport,idLeague} = props.league;
    return (
        <div className="league">
            <img src={card} alt=""/>
            <h2>{strLeague}</h2>
            <p>Sports Type : {strSport}</p>
            <div className="button-group">
                <Link to={`League/LeagueDetails/${idLeague}`}>
                    <button className="btn btn-warning">Details <FontAwesomeIcon icon={ faArrowRight} /></button>
                </Link>
                <Link to={`/teams/${idLeague}`}>
                    <button className="btn btn-danger">Teams</button>
                </Link>
            </div>
        </div>
    );
};

export default League;