import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//dictionaries imports
import englishDict from './languageDict/english.json';
import arabicDict from './languageDict/arabic.json';

const resources = {
  en: {
    translation: englishDict,
  },
  ar: {
    translation: arabicDict,
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
