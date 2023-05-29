import React from 'react';
import LocationPng from '../../../images/distance.svg';
import './TextFilledSquare.scss';

const TextFilledSquare = ({label, sublabel}) => {
    return (
        <div className="feature-text-filled-square">
            <img src={LocationPng} />
            <div className="feature-text-filled-square-label">
                {label}
            </div>
            <div className="feature-text-filled-square-sublabel">
                {sublabel}
            </div>
        </div>
    );
};

export default TextFilledSquare;
