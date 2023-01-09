import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import lang_en from "./locales/en.json";
import lang_ar from "./locales/ar.json";
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

const resources = {
  en: {
    translation: lang_en,
  },
  ar: {
    translation: lang_ar,
  },
};

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
        order: ['cookie' ,'path','htmlTag' ],
        caches: ['cookie'],
      },
     react: { useSuspense: false },
     resources
    // backend: {
    //   loadPath: '/locales/{{lng}}.json',

    //     // loadPath: './locales/en.json',
        
    //   },
  });

  export default i18n;