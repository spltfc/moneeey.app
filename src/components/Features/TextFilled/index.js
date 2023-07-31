import React from 'react';

import './TextFilled.scss';

const TextFilled = ({label}) => {
    return (
        <div className="feature-text-filled">
            <div className="feature-text-filled-label">
                {label}
            </div>
        </div>
    );
};

export default TextFilled;
