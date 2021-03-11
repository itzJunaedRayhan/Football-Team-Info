import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div style={{color: 'red'}} className="text-center my-5">
            <h2>Sorry, Module Not Found</h2>
            <h4>Error 404 !</h4>
            <Link to={`/home`}>
                <button className="btn btn-warning my-5 px-5 text-white"><FontAwesomeIcon icon={faArrowLeft} /> Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;