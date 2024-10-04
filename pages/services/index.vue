<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
    <div v-for="(card, idx) in documentGroupList" :key="idx">
      <Card @click="$router.push(`${card.path}`)" :title="card.title!" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/local/Card.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
console.log('locale ', locale.value);
const { t } = useI18n();

const documentGroupList = computed(() => {
  return [
    {
      title:t('pages.services.list.business'),
      icon: "briefcase",
      path: `/services/${locale.value}/is-hukuku`,
    },
    {
      title:t('pages.services.list.insurance'),
      icon: "briefcase",
      path: `/services/${locale.value}/sigorta-hukuku`,
    },
    {
      title:t('pages.services.list.real_estate'),
      icon: "briefcase",
      path: `/services/${locale.value}/gayrimenkul-ve-insaat-hukuku`,
    },
    {
      title:t('pages.services.list.trade'),
      icon: "briefcase",
      path: `/services/${locale.value}/ticaret-ve-sirketler-hukuku`,
    },
    {
      title:t('pages.services.list.arbitration'),
      icon: "briefcase",
      path: `/services/${locale.value}/tahkim`,
    },
    {
      title:t('pages.services.list.international'),
      icon: "briefcase",
      path: `/services/${locale.value}/uluslararasi-ozel-hukuk`,
    },
    {
      title:t('pages.services.list.criminal'),
      icon: "briefcase",
      path: `/services/${locale.value}/ceza-hukuku`,
    },
    {
      title:t('pages.services.list.tax'),
      icon: "briefcase",
      path: `/services/${locale.value}/idare-ve-vergi-hukuku`,
    },
    {
      title:t('pages.services.list.family'),
      icon: "briefcase",
      path: `/services/${locale.value}/aile-ve-miras-hukuku`,
    },
    {
      title:t('pages.services.list.personal'),
      icon: "briefcase",
      path: `/services/${locale.value}/kisisel-verilerin-korunmasi-hukuku`,
    },
    {
      title:t('pages.services.list.enforcement'),
      icon: "briefcase",
      path: `/services/${locale.value}/icra-ve-iflas-hukuku`,
    },
    {
      title:t('pages.services.list.litigation'),
      icon: "briefcase",
      path: `/services/${locale.value}/dava-takibi-hukuku`,
    },
  ];
});
</script>

<style scoped></style>
