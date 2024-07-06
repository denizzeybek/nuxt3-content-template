import en from "./locales/en.json";
import tr from "./locales/tr.json";


export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    { code: "en", iso: "en-US" },
    { code: "tr", iso: "tr-TR" },
  ],
  locale: "tr",
  fallbackLocale: "tr",
  messages: {
    en,
    tr,
  },
}));
