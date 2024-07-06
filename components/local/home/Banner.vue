<template>
  <div
    class="lg:justify-items-between grid flex-1 grid-cols-1 justify-items-center gap-12 lg:grid-cols-2"
  >
    <GlobalText
      :innerText="t('pages.home.banner.text')"
      as="span"
      className="text-6xl flex items-center w-full"
    />
    <GlobalText
      as="span"
      className="flex items-center text-2xl   text-start lg:text-end"
    >
      {{ t("pages.home.banner.description") }}
    </GlobalText>
  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped></style>
