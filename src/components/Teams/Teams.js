import React, { useState,useEffect } from 'react';
import Team from '../Team/Team';
import '../../components/Home/Home.css'
const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4480`
        fetch(url) 
        .then(response => response.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <>  
            <div className="main-content">
            {
                teams.map(tm => <Team team={tm} key={tm.idTeam}></Team>)
            }
        </div>
        </>
    );
};

export default Teams;