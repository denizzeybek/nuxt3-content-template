<!-- components/LanguageSwitcher.vue -->
<template>
  <select v-model="selectedLocale" @change="changeLocale">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale, availableLocales } = useI18n();

const selectedLocale = ref(locale.value);

const changeLocale = (event: Event) => {
  const newLocale = (event.target as HTMLSelectElement).value;
  localStorage.setItem("language", newLocale);
  setLocale(newLocale);
  selectedLocale.value = newLocale;
};
</script>
