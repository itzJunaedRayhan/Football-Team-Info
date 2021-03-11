import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link } from 'react-router-dom';


const Team = (props) => {
    const {strTeam, strTeamBadge,strSport,idTeam} = props.team;
    return (
        <div className='team'>
            <img src={strTeamBadge} alt=""/>
            <h2>{strTeam}</h2>
            <p>Sports type: {strSport}</p>
            <Link to={`/Team/TeamDetails/${idTeam}`}>
                <button className="btn btn-warning">Explore <FontAwesomeIcon icon={ faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default Team;