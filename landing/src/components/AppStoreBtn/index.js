import React from "react";
import './AppStoreBtn.scss';
// import AppStoreSvg from '../../images/appstore.svg';

const AppStoreBtn = () => {
    return (
        <div className="app-store-btn">
            <a href="https://apps.apple.com/us/app/moneeey/id1634998895?itsct=apps_box_badge&amp;itscg=30200">
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1684800000" alt="Download on the App Store" />
            </a>
        </div>
    );
};

export default AppStoreBtn;
