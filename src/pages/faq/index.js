import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import './faq.scss';
import HelpVideo from '../../images/help-video.mp4';
import FramePng from '../../images/frame.png';

import React, { useCallback, useEffect, useRef, useState } from 'react';

const steps = [
    'addFirstSpending',
    'addMoreGroups',
    'sortGroups',
    'addSpendings',
    'timeline',
    'editSpending',
    'changeMonth',
    'statsForMonth',
    'statsForGroup',
    'createBudget',
    'editBudget',
    'widgets',
];

const timecodes = {
    addFirstSpending: 0,
    addMoreGroups: 18,
    sortGroups: 59,
    addSpendings: 72,
    timeline: 110,
    editSpending: 115,
    changeMonth: 131,
    statsForMonth: 140,
    statsForGroup: 160,
    createBudget: 178,
    editBudget: 205,
    widgets: 230,
};


const stepByTimecode = {};
Object.keys(timecodes).forEach(k => {
    stepByTimecode[parseInt(timecodes[k], 10)] = k;
});

const FAQ = () => {
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(null);
    const video = useRef();
    const onTimeUpdate = useCallback(() => {
        const sortedTimecodes = Object.keys(stepByTimecode)
            .sort(a => parseInt(a, 10))
            .reverse();
        const stepTimecode = sortedTimecodes.find(t => t <= video.current.currentTime);
        const step = stepByTimecode[stepTimecode];
        setActiveStep(step);
    }, [video.current, setActiveStep]);

    const onStepClick = (step) => {
        document.scrollingElement.style.overflow = 'hidden';
        setActiveStep(step);
        const timecode = timecodes[step];
        video.current.currentTime = timecode;
        video.current.play();
    };

    const onBackClick = () => {
        document.scrollingElement.style.overflow = 'auto';
        video.current.pause();
        setActiveStep(null);
    };

    useEffect(() => {
        video.current.addEventListener('timeupdate', onTimeUpdate);
        return () => video.current.removeEventListener('timeupdate', onTimeUpdate);
    }, []);

    return (<div className='faq-page'>
        <Header />
        <h1 className='faq-title'>{t('faq.title')}</h1>
        <div className='faq-steps'>
            {steps.map((step, i) => {
                return (<div key={step} className='faq-step' onClick={() => onStepClick(step)}>
                    <div className='faq-step-play-btn material-symbols-rounded'>play_circle</div>
                    <div className='faq-step-label'>{t('faq.step_' + step)}</div>
                    {/* <div className='faq-step-number'>{i + 1}</div> */}
                </div>);
            })}
        </div>
        <div className={`faq-overlay ${activeStep !== null ? '__visible' : ''}`}>
            <div className='faq-overlay-video-wrap'>
                <div className='faq-overlay-video'>
                    <img src={FramePng} className='faq-overlay-video-frame' />
                    <video
                        ref={video}
                        loop
                        muted
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        playsInline
                        src={HelpVideo}
                        className='faq-overlay-video-video' 
                    />
                </div>
            </div>
            <div className='faq-overlay-label' onClick={onBackClick}>
                <div className='faq-overlay-label-icon material-symbols-rounded'>arrow_back_ios_new</div>
                <div className='faq-overlay-label-text'>
                    {t(`faq.step_${activeStep}`)}
                </div>
                {/* <div className='faq-overlay-label-icon material-symbols-rounded'>replay</div> */}
            </div>
        </div>
    </div>);
};

export default FAQ;
