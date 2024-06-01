<template>
  <div class="2xl:grid-cols-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
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
  path?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  path: "services",
});

const { data: dataList } = await useAsyncData(`${props.path}`, () =>
  queryContent(`/${props.path}`).find(),
);
</script>

<style scoped></style>
