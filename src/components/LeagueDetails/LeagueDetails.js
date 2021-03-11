import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MaleImage from '../../images/Rectangle 28.png';
import FemaleImage from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import '../TeamDetails/TeamDetails.css'

const LeagueDetails = (props) => {
    const {id} = useParams();
    const [leagueDetails, setLeagueDetails] = useState([])
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagueDetails(data.leagues[0]))
    },[id])
    const {strLeague, strBadge, strBanner, strCountry, dateFirstEvent,strSport,strGender, strDescriptionEN} = leagueDetails;
    
    //  Function For Set Gender related Image
        const showTeamInfoImg = (Gender) => {
            if (Gender === 'Male') {
                return MaleImage;
            }else if (Gender === 'Female') {
                return FemaleImage;
            }
        }

    
    //  css Style For setting Description Banner
    const ApplyStyle = {
        backgroundImage : `url(${strBanner})`,
        backgroundSize : 'cover',
        backgroundPosition: 'center center',
        objectFit: 'cover',
    }
    return (
        <div className="DescWrapper">
            <div className="DescBanner" style={ApplyStyle}>
                <div className="badge">
                    <img src={strBadge} alt="" className="imgResponsive" />
                </div>
            </div>
            <div className="DescBody">
                <div className="team-info">
                    <div className="team-info-content">
                        <h2>{strLeague}</h2>
                        <p><FontAwesomeIcon icon={ faMapMarkerAlt} /> Founded: {dateFirstEvent}</p>
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

export default LeagueDetails;