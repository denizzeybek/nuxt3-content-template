<!-- components/LanguageSwitcher.vue -->
<template>
  <select v-model="selectedLocale" @change="changeLocale(($event.target as HTMLSelectElement).value)">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
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

</script>
