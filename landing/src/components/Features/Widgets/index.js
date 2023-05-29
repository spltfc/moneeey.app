import React from 'react';
import Widget1Svg from '../../../images/widget1.svg';
import Widget2Svg from '../../../images/widget2.svg';
import Widget3Svg from '../../../images/widget3.svg';
import Widget4Svg from '../../../images/widget4.svg';
import WidgetLockPng from '../../../images/widgetlock.png';

import './Widgets.scss';

const Widgets = () => {
    return (
        <div className="feature-widgets">
            <div className="feature-widgets-label">
                Add widgets to home or lock screen<br/>
                to keep your numbers always in sight
            </div>
            <div className="feature-widgets-img">
                <img src={Widget1Svg} className="feature-widgets-img-1" />
                <img src={Widget3Svg} className="feature-widgets-img-2" />
                <img src={Widget2Svg} className="feature-widgets-img-3" />
                <img src={Widget4Svg} className="feature-widgets-img-4" />
                <img src={WidgetLockPng} className="feature-widgets-img-lock" />
            </div>
        </div>
    );
};

export default Widgets;
