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
            <Location
                label={<>Location suggestions for your spendings</>}
                sublabel={`Moneeey will remember and suggest groups that you’ve used many times in the same places`}
            />
            <TextFilled label={<>Colored groups for your spendings and incomings</>} />
            <TextFilled label={<>Monthly and weekly budgets to&nbsp;help you set limits</>} />
            <TextFilled label={<>Simple and clear statistics with two different modes</>} />
            <TextFilled label={<>Spendings tracking just in&nbsp;few simple taps. No&nbsp;time wasting</>} />
        </section>
    );
};

export default Features;
