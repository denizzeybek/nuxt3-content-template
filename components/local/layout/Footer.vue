<template>
  <footer class="border-t-2 border-gray-700 p-12 lg:px-40 lg:py-10">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-40">
      <div class="lg:col-span-1 flex flex-col justify-center">
        <GlobalText
          as="h1"
          :inner-text="t('layout.footer.title')"
          class-name="uppercase mb-8"
        />
        <GlobalText as="span" :inner-text="t('layout.footer.address')" class-name="uppercase mb-4 text-2xl" />
        <GlobalText as="span" class-name="mb-1 text-lg">
          Acıbadem Mah. Çeçen Sk. Akasya Kent Kule A3 Blok Kat:15 No: 35 Üsküdar
          / İSTANBUL - 34660
        </GlobalText>
        <GlobalText as="span" class-name="mb-1 text-lg">
          +90 (216) 308 50 50
        </GlobalText>
        <GlobalText as="span" class-name="text-lg">
          info@sen.av.tr
        </GlobalText>
      </div>
      <div id="google-maps" class="lg:col-span-2 bg-slate-300 w-full h-[300px]"></div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped></style>
