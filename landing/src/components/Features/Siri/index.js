import React from 'react';
import SiriPng from '../../../images/siri.png';
import ShortcutsPng from '../../../images/shortcuts.png';
import './Siri.scss';

const Siri = () => {
    return (
        <div className="feature-siri">
            <div className="feature-siri-label">
                Track your spendings
                by voice command with
                Siri and Shortcuts
            </div>
            <div className="feature-siri-img">
                <img src={SiriPng} alt="Siri" />
                <img src={ShortcutsPng} alt="Shortcuts" />
            </div>
            <div className="feature-siri-sublabel">
                “Hey Siri,<br/>
                Track my spending”
            </div>
        </div>
    );
};

export default Siri;
