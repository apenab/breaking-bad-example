import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationES from "./es/translation.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
} as const;

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
