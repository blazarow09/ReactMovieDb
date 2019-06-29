import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to='/'>
                <img className="rmdb-logo" src="./images/reactMovie_logo.png" />
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" />
                </Link>
            </div>
        </div>
    )
}

export default Header;