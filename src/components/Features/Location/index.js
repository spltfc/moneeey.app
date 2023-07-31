import React from 'react';
import { useTranslation } from 'react-i18next';
import './Location.scss';

const Location = () => {
    const {t} = useTranslation();
    return (
        <div className="feature-text-filled-square">
            <div className="feature-text-filled-square-label">
                {t('features.smartSuggestsTitle')}
            </div>
            <div className="feature-text-filled-square-sublabel">
                {t('features.smartSuggestsText')}
            </div>
            <div className="feature-text-filled-square-sublabel-small">
                {t('features.smartSuggestsTip')}
            </div>
        </div>
    );
};

export default Location;
