import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import fa from "./fa.json";

const hostname = window.location.hostname;
let defaultLang = "en";

if (hostname.endsWith(".ir")) {
  defaultLang = "fa";
} else if (hostname.endsWith(".art")) {
  defaultLang = "en";
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: defaultLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
