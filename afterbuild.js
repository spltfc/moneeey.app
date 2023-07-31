#!/usr/bin/env node

const { mkdir, copyFile, constants } = require('node:fs/promises');
var fs = require('fs');

const LANGS = ['uk', 'pl'];
const rootIndexFile = './build/index.html';

const strings = {
    en: {
        title: 'Moneeey — personal budget management app',
        description: 'Moneeey — Super simple personal budget management iOS app. Most budget management apps have outdated design and overloaded functionality. We\'ve made it simple.',
    },
    uk: {
        title: 'Moneeey - додаток для вашого бюджету',
        description: 'Moneeey — суперпростий додаток для управління особистим бюджетом. Більшість програм для управління бюджетом мають застарілий дизайн і перевантажені функції. Ми зробили це простіше.',
    },
    pl: {
        title: 'Moneyeey — aplikacja do zarządzania budżetem osobistym',
        description: 'Moneyey — Super prosta aplikacja do zarządzania budżetem osobistym. Większość aplikacji do zarządzania budżetem ma przestarzały wygląd i przeciążoną funkcjonalność. Uprościliśmy to.',
    },
};

const replaceStrings = (file, lang) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.log(err);
        let result = data.replace(/%TITLE%/g, strings[lang].title);
        result = result.replace(/%DESCRIPTION%/g, strings[lang].description);
        result = result.replace(/%LANG%/g, lang);
        fs.writeFile(file, result, 'utf8', (err) => {
           if (err) return console.log(err);
        });
    });
};

let promises = LANGS.map((lang) => {
    const dir = `./build/${lang}`;
    return mkdir(dir).then(() => {
        return copyFile(rootIndexFile, `${dir}/index.html`)
            .then(() => ({filename: `${dir}/index.html`, lang}));
    });
});

Promise.all(promises).then((results) => {
    results.map(({filename, lang}) => {
        replaceStrings(filename, lang);
    });
}).then(() => {
    replaceStrings(rootIndexFile, 'en');
});
