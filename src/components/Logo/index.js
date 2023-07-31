import React from 'react';
import './Logo.scss';
import LogoSVG from '../../images/logo.svg';
import LogoSVGDark from '../../images/logo-dark.svg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoSVG} className="lightmode" />
            <img src={LogoSVGDark} className="darkmode" />
        </div>
    );
};

export default Logo;
