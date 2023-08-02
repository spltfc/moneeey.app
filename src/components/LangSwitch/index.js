import React, {useEffect, useRef, useState} from 'react';

import './LangSwitch.scss';

const lngs = {
    en: ['eng', 'english'],
    uk: ['ukr', 'українська'],
    pl: ['pol', 'polski'],
};

const lang = (window.location.pathname || window.location.path || '').split('/')[1] || 'en';

const LangSwitch = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    const onDocClick = useRef(({target}) => {
        if (!target.closest('.lang-switch') && !target?.classList?.contains('lang-switch')) {
            setDropdownVisible(false);
        }
    });

    useEffect(() => {
        document.addEventListener('click', onDocClick.current);
        return () => document.removeEventListener('click', onDocClick.current);
    }, []);

    return (
        <div className="lang-switch">
            <div className="lang-switch-label" onClick={toggleDropdown}>
                {lngs[lang][0]}
            </div>
            <div className={`lang-switch-dropdown ${dropdownVisible ? '__opened' : ''}`}>
                {
                    Object.keys(lngs).map((l) => {
                        if (l === lang) return null;
                        return (<a key={l} href={(l === 'en' ? '/' : `/${l}/`) + window.location.hash} className="lang-switch-dropdown-label">
                            {lngs[l][1]}
                        </a>);
                    })
                }
            </div>
        </div>
    );
};

export default LangSwitch;
