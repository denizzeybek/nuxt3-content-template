<template>
  <div
    class="flex min-h-[200px] min-w-[200px] px-8 max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded shadow-lg"
  >
    <img v-if="icon" :src="icon" />
    <div class="mb-2 text-center text-xl font-normal">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  icon?: string;
}

defineProps<IProps>();
</script>
