<template>
  <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 lg:justify-items-between gap-12 py-60">
    <GlobalText as="span" className="text-6xl"
      >Hello, I’m <br />
      Mehmet Akif.
    </GlobalText>
    <GlobalText as="span" className="text-4xl text-center lg:text-end">
      A senior-year design student who trying to specialize in 3D modeling &
      texturing.
    </GlobalText>
  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
</script>

<style scoped></style>
