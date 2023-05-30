import React from 'react';
import LocationPng from '../../../images/distance.svg';
import './Location.scss';

const Location = () => {
    return (
        <div className="feature-text-filled-square">
            <div className="feature-text-filled-square-label">
                <img src={LocationPng} />
                Quick suggestions for your current location
            </div>
            <div className="feature-text-filled-square-sublabel">
                Moneeey will suggest you spending groups that you've used earlier in&nbsp;your current location.
            </div>
            <div className="feature-text-filled-square-sublabel-small">
                For this feature you must allow precise location access for the app. We do not collect your location data.
            </div>
        </div>
    );
};

export default Location;
