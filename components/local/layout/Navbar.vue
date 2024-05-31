<template>
  <nav class="bg-r-white flex items-center justify-between lg:mb-16 lg:py-8">
    <div>
      <nuxt-link to="/" class="text-r-black text-2xl">NK.</nuxt-link>
    </div>
    <div class="grid grid-cols-4 grid-rows-1 justify-items-end gap-8">
      <nuxt-link to="/" class="text-r-black">
        <GlobalText as="h2" class-name="!font-normal">Hakkımızda</GlobalText>
      </nuxt-link>
      <nuxt-link to="/services" class="text-r-black">
        <GlobalText as="h2" class-name="!font-normal">Hizmetlerimiz</GlobalText>
      </nuxt-link>
      <nuxt-link to="/" class="text-r-black">
        <GlobalText as="h2" class-name="!font-normal">Makaleler</GlobalText>
      </nuxt-link>
      <nuxt-link to="/" class="text-r-black">
        <GlobalText as="h2" class-name="!font-normal">İletişim</GlobalText>
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
</script>
