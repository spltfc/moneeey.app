import React from 'react';

import './TextStroke.scss';

const TextStroke = ({label}) => {
    return (
        <div className="feature-text-stroke">
            <div className="feature-text-stroke-label">
                {label}
            </div>
        </div>
    );
};

export default TextStroke;
