import React from 'react';

import './Features.scss';
import TextStroke from './TextStroke';
import TextFilled from './TextFilled';
import TextFilledSquare from './TextFilledSquare';
import Siri from './Siri';
import Widgets from './Widgets';

const Features = () => {
    return (
        <section className="features">
            <TextStroke label={'No registration'} />
            <TextStroke label={'No data collection'} />
            <TextStroke label={'Works offline'} />
            <Siri />
            <Widgets />
            <TextFilledSquare
                label={<>Location suggestions<br/>for your spendings</>}
                sublabel={`App will remember and suggest groups that you’ve used many times in the same places`}
            />
            <TextFilled label={<>Colored groups for<br/>your spendings and<br/>incomings</>} />
            <TextFilled label={<>Monthly and weekly<br/>budgets to help you<br/>set limits</>} />
            <TextFilled label={<>Simple and clear<br/>statistics with two<br/>different modes</>} />
            <TextFilled label={<>Spendings tracking<br/>just in few simple taps.<br/>No time wasting</>} />
        </section>
    );
};

export default Features;
