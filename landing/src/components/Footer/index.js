import React from "react";
import AppStoreBtn from "../AppStoreBtn";

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <AppStoreBtn />
            </div>
            <div>
                <a href="/eula.html" target="_blank">
                    Terms of service / EULA
                </a>
                <span>2023 ©</span>
            </div>
        </footer>
    );
};

export default Footer;
