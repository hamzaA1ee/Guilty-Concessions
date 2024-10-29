import i18n from './i18.utils';

export const changeLanguage = (lng: 'en' | 'ar') => {
  console.log(lng);
  i18n.changeLanguage(lng);
};
