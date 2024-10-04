<template>
  <div class="2xl:grid-cols-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
    <div v-if="!dataList?.length">empty</div>
    <template v-else>
      <div v-for="(data, idx) in localizedDataList" :key="idx">
        <Card
          @click="$router.push(`${data._path}`)"
          :title="data.title"
          :icon="data?.icon"
          :key="idx"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/local/Card.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

interface IProps {
  path?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  path: "services",
});

const { data: dataList } = await useAsyncData(`${props.path}`, () =>
  queryContent(`/${props.path}`).find(),
);

const localizedDataList = computed(() => {
  return dataList.value?.map((data: any) => {
    const { title } = data;
    if (currentLocale.value === "tr") {
      return { ...data, title: data?.titleTr ?? title };
    } else if (currentLocale.value === "en") {
      return { ...data, title: data?.titleEn ?? title };
    }
    return { ...data, title };
  });
});

const setTitle = (data: any) => {
  const { title } = data;
  if (currentLocale.value === "tr") {
    return data?.titleTr ?? title;
  } else if (currentLocale.value === "en") {
    return data?.titleEn ?? title;
  }
  return title;
};

watch(
  () => currentLocale.value,
  (newVal) => {
    // console.log('new ', newVal);
  },
);
</script>

<style scoped></style>
