<template>
  <div class="max-w-sm overflow-hidden rounded shadow-lg min-h-[300px] cursor-pointer">
    <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> -->
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold">{{ title }}</div>
      <p class="text-base text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  description: string;
}

defineProps<IProps>();
</script>
