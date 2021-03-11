import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import MaleImage from '../../images/male.png'
import FemaleImage from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'

const TeamDetails = (props) => {
    const {id} = useParams()
    const [TeamDetails, SetTeamDetails] = useState({})
    const {strTeamBanner,strTeamBadge,strTeam,intFormedYear,strCountry,strSport, strGender,strDescriptionEN} = TeamDetails;


    //  Loading Data from Database
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => SetTeamDetails(data.teams[0]))
    },[id])
    


    //  Function For set Gender related Image
    const showTeamInfoImg = (Gender) => {
        if (Gender === 'Male') {
            return MaleImage;
        }else if (Gender === 'Female') {
            return FemaleImage;
        }
    }



    //  css Style For setting Description Banner
    const ApplyStyle = {
        backgroundImage : `url(${strTeamBanner})`,
        backgroundSize : 'cover',
        backgroundPosition: 'center center',
        objectFit: 'cover',
    }


    return (
        <div className="DescWrapper">
            <div className="DescBanner" style={ApplyStyle}>
                <div className="badge">
                    <img src={strTeamBadge} alt="" className="img-responsive"/>
                </div>
            </div>
            <div className="DescBody">
                <div className="team-info">
                    <div className="team-info-content">
                        <h2>{strTeam}</h2>
                        <p><FontAwesomeIcon icon={ faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={ faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={ faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={ faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="team-info-image">
                        <img src={showTeamInfoImg(strGender)} alt=""/>
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="https://twitter.com/itzJunaedRayhan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter} /></a></li>
                        <li><a href="https://www.facebook.com/JKwebGenesis" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebook} /></a></li>
                        <li><a href="http://www.youtube.com/channel/UCvTcPyzjXSSKhidkALSK5oA?sub_confirmation=1" target="_blank" rel="noreferrer"><FontAwesomeIcon style={{color: 'red'}} icon={ faYoutube} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;