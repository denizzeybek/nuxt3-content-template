<template>
  <div class="grid grid-cols-2 grid-rows-1 justify-between gap-12 py-60">
    <GlobalText as="span" className="text-6xl"
      >Hello, I’m <br />
      Mehmet Akif.
    </GlobalText>
    <GlobalText as="span" className="text-4xl text-end">
      A senior-year design student who trying to specialize in 3D modeling &
      texturing.
    </GlobalText>
  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
</script>

<style scoped></style>
