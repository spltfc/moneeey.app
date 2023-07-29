import React from 'react';
import { useTranslation } from 'react-i18next';
import AppStoreBtn from '../AppStoreBtn';
import PhonesImg from '../../images/phones.png';
import Palka1 from '../../images/palka1.svg';
import Palka2 from '../../images/palka2.svg';
import Palka3 from '../../images/palka3.svg';
import Palka4 from '../../images/palka4.svg';

import './Main.scss';

const Main = () => {
    const {t} = useTranslation();

    return (
        <section className="main">
            <div className="main-left">
                <div className="main-title">
                    {t('main.title')}
                </div>
                <div className="main-phones">
                    <img src={PhonesImg} alt="" />
                </div>
                <AppStoreBtn />
                <div className="main-text">
                    {/* Most budget management apps have an outdated interface and overloaded functionality. */}
                    {t('main.text')}
                    <br />
                    <br />
                    <strong>{t('main.boldText')}</strong>
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
