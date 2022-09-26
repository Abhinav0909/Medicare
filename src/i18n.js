import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en/translationEn.json' // English
import translationHi from './locales/hi/translationHi.json' // Hindi
import translationMd from './locales/md/translationMd.json' // Mandarin
import translationGr from './locales/gr/translationGr.json' // Greek

const resources = {
    en: {
        translation: translationEn
    },
    hi: {
        translation: translationHi
    },
    md: {
        translation: translationMd
    },
    gr: {
        translation: translationGr
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
