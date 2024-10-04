<!-- components/LanguageSwitcher.vue -->
<template>
  <select class="px-4 py-2 rounded-md" v-model="selectedLocale" @change="changeLocale(($event.target as HTMLSelectElement).value)">
    <option class="bg-white" v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ setLocaleText(locale) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale, availableLocales } = useI18n();
const languageCookie = useCookie("lang", {
  default: () => "tr",
  watch: "shallow",
});
const selectedLocale = ref(locale.value);

const changeLocale = (lang: string) => {
  languageCookie.value = lang;
  setLocale(lang);
  selectedLocale.value = lang;
};

changeLocale(languageCookie.value)

const setLocaleText = (lang: string) => {
  switch (lang) {
    case "tr":
      return "Türkçe";
    case "en":
      return "English";
    default:
      return "Türkçe";
  }
};

</script>
