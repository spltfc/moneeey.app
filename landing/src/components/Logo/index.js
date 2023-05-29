import React from 'react';
import './Logo.scss';
import LogoSVG from '../../images/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoSVG} />
        </div>
    );
};

export default Logo;
