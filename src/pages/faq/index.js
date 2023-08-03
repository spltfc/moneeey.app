import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import './faq.scss';
import HelpVideo from '../../images/help-video.mp4';
import FramePng from '../../images/frame.png';
import SuggestsPicPng from '../../images/suggests.png';

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

// yep! that's shitcoding
const secToMin = (s) => {
    let sec = `${s % 60}`;
    if (sec.length === 1) sec = '0' + sec;
    return `${Math.floor(s / 60)}:${sec}`;
};

const FAQ = () => {
    const {t} = useTranslation();
    const [activeStep, setActiveStep] = useState(null);
    const [activePic, setActivePic] = useState(null);
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

    const onPicClick = (pic) => {
        document.scrollingElement.style.overflow = 'hidden';
        setActivePic(pic);
    };

    const onBackClick = ({target}) => {
        if (target.className.includes('faq-overlay-label-replay')) return;
        document.scrollingElement.style.overflow = 'auto';
        video.current.pause();
        setActiveStep(null);
        setActivePic(null);
    };

    const replay5 = () => {
        video.current.pause();
        video.current.currentTime = Math.max(0, video.current.currentTime - 5);
        video.current.play();
        return false;
    };

    useEffect(() => {
        try {
            video.current.playbackRate = .85;
        } catch (e){}
        video.current.addEventListener('timeupdate', onTimeUpdate);
        return () => video.current?.removeEventListener('timeupdate', onTimeUpdate);
    }, [video.current]);

    return (<div className='faq-page'>
        <Header />
        <h1 className='faq-title'>{t('faq.title')}</h1>
        <div className='faq-steps'>
            <div className='faq-steps-full' onClick={() => onStepClick(steps[0])}>
                <div className='faq-steps-full-play-btn material-symbols-rounded'>play_circle</div>
                <div className='faq-steps-full-label'>
                    {t('faq.watch_all')}
                </div>
            </div>
            {steps.map((step, i) => {
                return (<div key={step} className='faq-step' onClick={() => onStepClick(step)}>
                    <div className='faq-step-play-btn material-symbols-rounded'>play_circle</div>
                    <div className='faq-step-label'>{t('faq.step_' + step)}</div>
                    <div className='faq-step-number'>{secToMin(timecodes[step])}</div>
                </div>);
            })}
            <div className='faq-step' onClick={() => onPicClick('suggests')}>
                <div className='faq-step-play-btn material-symbols-rounded'>imagesmode</div>
                <div className='faq-step-label'>{t('faq.pic_suggestsLabel')}</div>
            </div>
        </div>
        <div className={`faq-overlay-pic ${activePic !== null ? '__visible' : ''}`}>
            <div className='faq-overlay-pic-image-wrap'>
                <img src={SuggestsPicPng} className='faq-overlay-pic-image' />
            </div>
            <div className='faq-overlay-pic-label' onClick={onBackClick}>
                <div className='faq-overlay-pic-label-icon material-symbols-rounded'>arrow_back_ios_new</div>
                <div className='faq-overlay-pic-label-text'>
                    {t(`faq.pic_suggestsText`)}
                </div>
            </div>
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
                    {activeStep ? t(`faq.step_${activeStep}`) : null}
                </div>
                <div className='faq-overlay-label-replay material-symbols-rounded' onClick={replay5}>replay_5</div>
            </div>
        </div>
    </div>);
};

export default FAQ;
