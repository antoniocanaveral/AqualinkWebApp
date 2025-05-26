import translationsEn from './localization/en/translation.json';
import translationsEs from './localization/esp/translation.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: translationsEn,
    },
    esp: {
      translations: translationsEs,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'esp'];

export default i18n;
