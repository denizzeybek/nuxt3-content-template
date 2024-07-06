<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="grid grid-cols-1 gap-4 md:gap-12">
      <GlobalText
        :innerText="t('pages.about.banner.title')"
        as="span"
        className="text-6xl flex items-center w-full"
      />
      <GlobalText as="info" className="flex items-center !text-2xl text-start">
        {{ t("pages.about.banner.description") }}
      </GlobalText>
      <GlobalText as="info" className="flex items-center !text-2xl text-start">
        {{ t("pages.about.banner.description_2") }}
      </GlobalText>
      <div class="mt-8 md:mt-12">
        <div class="grid grid-cols-1 gap-8 md:gap-24">
          <div class="flex items-start flex-col md:flex-row" v-for="item in resumeList" :key="item.title">
            <GlobalText
              :innerText="item.title"
              as="ps"
              className="!text-xl flex mr-4 underline items-center min-w-[250px]"
            />
            <ul class="list-disc list-inside">
              <li v-for="li in item.items" :key="li" class="flex">
                <GlobalText :innerText="li" as="info" className="!text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-slate-400">resim</div>
  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const resumeList = computed(() => [
  {
    title: t("pages.about.banner.list.school.title"),
    items: [t("pages.about.banner.list.school.description")],
  },
  {
    title: t("pages.about.banner.list.languages.title"),
    items: [
      t("pages.about.banner.list.languages.turkish"),
      t("pages.about.banner.list.languages.english"),
      t("pages.about.banner.list.languages.french"),
    ],
  },
  {
    title: t("pages.about.banner.list.working_areas.title"),
    items: [
      t("pages.about.banner.list.working_areas.insurance"),
      t("pages.about.banner.list.working_areas.arbitration"),
      t("pages.about.banner.list.working_areas.private_international"),
      t("pages.about.banner.list.working_areas.commercial_and_corporate_law"),
      t("pages.about.banner.list.working_areas.informatics"),
    ],
  },
]);
</script>

<style scoped></style>
