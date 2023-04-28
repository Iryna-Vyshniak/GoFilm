import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from 'data/locales/en/translation.json';
import uk from 'data/locales/uk/translation.json';

export const langs = {
  UK: 'uk',
  EN: 'en',
};

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    supportedLngs: ['en', 'uk'],
    fallbackLng: langs.EN,
    debug: true,
    resources,
    detection: {
      order: ['path', 'localStorage', 'cookie', 'htmlTag', 'subdomain'],
      cashes: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '../data/locales/{{lng}}/translation.json',
    },
  });
