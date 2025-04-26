import type { Locale } from "@root/i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  "pt-BR": () =>
    import("@shared/locales/pt-br.json").then((module) => module.default),
  "en-US": () =>
    import("@shared/locales/en-us.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["pt-BR"]();
