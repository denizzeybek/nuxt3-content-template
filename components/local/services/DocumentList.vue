<template>
  <div class="grid grid-cols-4 gap-6">
    <div v-if="!dataList?.length">empty</div>
    <template v-else>
      <div v-for="(data, idx) in dataList" :key="idx">
        <Card
          @click="$router.push(`${data._path}`)"
          :title="data.title!"
          :icon="data?.icon"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/local/Card.vue";

interface IProps {
  path: string;
}

const { path } = defineProps<IProps>();

const { data: dataList } = await useAsyncData(`${path}`, () =>
  queryContent(`/${path}`).find(),
);
</script>

<style scoped></style>
