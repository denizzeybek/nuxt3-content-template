<template>
  <div class="mb-4 flex items-center rounded border-2 border-green-400 p-4">
    <div class="mr-4 rounded-full bg-green-400 p-2">
        iconPath: {{ iconPath }}
      <img :src="iconPath" />
    </div>
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  iconPath: string;
}
defineProps<IProps>();
</script>

<style scoped></style>
