import React from 'react';
import SiriPng from '../../../images/siri.png';
import ShortcutsPng from '../../../images/shortcuts.png';
import './Siri.scss';
import { useTranslation } from 'react-i18next';

const Siri = () => {
    const {t} = useTranslation();
    return (
        <div className="feature-siri">
            <div className="feature-siri-label">
                {t('features.siriTitle')}
            </div>
            <div className="feature-siri-img">
                <img src={SiriPng} alt="Siri" />
                <img src={ShortcutsPng} alt="Shortcuts" />
            </div>
            <div className="feature-siri-sublabel">
                {t('features.siriText')}
            </div>
        </div>
    );
};

export default Siri;
