import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Leagues = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagues(data.leagues.slice(115, 265)))
    },[])
    return (
        <div className="main-content">
            {
                leagues.map(leaguesData => <League league={leaguesData} key={leaguesData.idLeague}></League>)
            }
        </div>
    );
};

export default Leagues;