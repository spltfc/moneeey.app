import React from 'react';
import { useTranslation } from 'react-i18next';

import './Features.scss';
import TextStroke from './TextStroke';
import TextFilled from './TextFilled';
import Location from './Location';
import Siri from './Siri';
import Widgets from './Widgets';

const Features = () => {
    const {t} = useTranslation();
    return (
        <section className="features">
            <TextStroke label={t('features.shortFeature1')} />
            <TextStroke label={t('features.shortFeature2')} />
            <TextStroke label={t('features.shortFeature3')} />
            <Siri />
            <Widgets />
            <Location />
            <TextFilled label={t('features.longFeature1')} />
            <TextFilled label={t('features.longFeature2')} />
            <TextFilled label={t('features.longFeature3')} />
            <TextFilled label={t('features.longFeature4')} />
        </section>
    );
};

export default Features;
