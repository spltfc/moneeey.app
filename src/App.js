import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';

import {
    createHashRouter,
    RouterProvider,
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import i18n from 'i18next';
import en from './i18n/en';
import uk from './i18n/uk';
import pl from './i18n/pl';

import FAQ from './pages/faq';

const lng = (window.location.pathname || window.location.path || '').split('/')[1] || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en, uk, pl,
        },
        lng,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Features />
            <Footer />
        </>
    );
};

function App() {
    useEffect(() => {
        try {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.querySelector('meta[name="theme-color"]').content = '#151624';
            }
        } catch (e) {}
    }, []);

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="help" element={<FAQ />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
