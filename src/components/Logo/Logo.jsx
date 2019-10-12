import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
    <Link to="/" alt="Logo" className="Logo">
            <div className="Logo__circle">
                <img src={process.env.PUBLIC_URL + '/Ant Icon.png'} alt=""/>
            </div>
            <div className="Logo__square"> 
                <p>MAPA DE</p>
                <p>EMPRENDIMIENTO</p>
            </div>
    </Link>
);

export default Logo;