import React from "react";
import AppStoreBtn from "../AppStoreBtn";
import PhonesImg from '../../images/phones.png';
import Palka1 from '../../images/palka1.svg';
import Palka2 from '../../images/palka2.svg';
import Palka3 from '../../images/palka3.svg';
import Palka4 from '../../images/palka4.svg';

import './Main.scss';

const Main = () => {
    return (
        <section className="main">
            <div className="main-left">
                <div className="main-title">
                    Super simple personal budget management app
                </div>
                <div className="main-phones">
                    <img src={PhonesImg} alt="" />
                </div>
                <AppStoreBtn />
                <div className="main-text">
                    {/* Most budget management apps have an outdated interface and overloaded functionality. */}
                    The interface of many budget management apps is&nbsp;outdated, and their functionality is&nbsp;overloaded.
                    <br />
                    <br />
                    <strong>We've made it simpler.</strong>
                </div>
            </div>
            <div className="main-palki">
                <img src={Palka1} alt="" className="palka-1" />
                <img src={Palka2} alt="" className="palka-2" />
                <img src={Palka3} alt="" className="palka-3" />
                <img src={Palka4} alt="" className="palka-4" />
            </div>
        </section>
    );
};

export default Main;
