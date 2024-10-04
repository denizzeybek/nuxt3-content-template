<template>
  <div class="grid grid-cols-1 gap-40 lg:grid-cols-3">
    <div
      id="google-maps"
      class="h-[300px] w-full bg-slate-300 "
      :class="customClass"
    ></div>
    <div class="flex flex-col justify-center lg:col-span-1" >
      <GlobalText
        as="h1"
        :inner-text="t('layout.footer.title')"
        class-name="uppercase mb-8"
      />
      <GlobalText
        as="span"
        :inner-text="t('layout.footer.address')"
        class-name="uppercase mb-4 text-2xl"
      />
      <GlobalText as="span" class-name="mb-1 text-lg">
        Acıbadem Mah. Çeçen Sk. Akasya Kent Kule A3 Blok Kat:15 No: 35 Üsküdar /
        İSTANBUL - 34660
      </GlobalText>
      <GlobalText as="span" class-name="mb-1 text-lg">
        +90 (216) 308 50 50
      </GlobalText>
      <GlobalText as="span" class-name="text-lg"> info@sen.av.tr </GlobalText>
    </div>

  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface IProps {
    colSpan?: number;
    order?: number;
    customClass?: string;
}

withDefaults(defineProps<IProps>(), {
    colSpan: 1,
    order: 1,
    customClass: 'lg:col-span-2'
});

</script>

<style scoped></style>
