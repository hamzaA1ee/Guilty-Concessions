import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import ar from './languages/ar.json';

//dictionaries imports

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n

  .use(initReactI18next)

  .init({
    resources: resources,
    fallbackLng: 'en',
    lng: 'ar',
    debug: true,
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
