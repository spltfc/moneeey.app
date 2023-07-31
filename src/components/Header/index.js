import React from 'react';
import Logo from '../Logo';
import './Header.scss';
import LangSwitch from '../LangSwitch';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <LangSwitch />
        </header>
    );
};

export default Header;
