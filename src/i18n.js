import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next"
//     }
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next"
//     }
//   }
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // resources,
    // lng: "en", 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    },
    //option for language detector
    detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
     react: { useSuspense: false },
    backend: {
        loadPath: '/locales/{{lng}}.json',
      },
  });

  export default i18n;