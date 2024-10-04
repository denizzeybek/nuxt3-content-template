<template>
  <DocumentList :path="`services/${locale}/idare-ve-vergi-hukuku`" />
</template>

<script setup lang="ts">
import DocumentList from "@/components/local/services/DocumentList.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped></style>
