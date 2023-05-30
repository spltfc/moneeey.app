import React from 'react';

import './Features.scss';
import TextStroke from './TextStroke';
import TextFilled from './TextFilled';
import Location from './Location';
import Siri from './Siri';
import Widgets from './Widgets';

const Features = () => {
    return (
        <section className="features">
            <TextStroke label={'No registration'} />
            <TextStroke label={'No data collection'} />
            <TextStroke label={<>Fully offline</>} />
            <Siri />
            <Widgets />
            <Location />
            <TextFilled label={<>Set up colors of&nbsp;your groups for better perception, or&nbsp;use them as&nbsp;extra categories</>} />
            <TextFilled label={<>Achieve your financial goals with monthly and weekly customizable budgets</>} />
            <TextFilled label={<>Simple and informative statistics with two different chart views</>} />
            <TextFilled label={<>Time is&nbsp;money. We'll help keep them. Add spendings with a&nbsp;few taps in&nbsp;a&nbsp;few seconds</>} />
        </section>
    );
};

export default Features;
