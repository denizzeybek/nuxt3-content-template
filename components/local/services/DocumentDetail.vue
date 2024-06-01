<template>
    <header>
      <GlobalText
        as="h1"
        :inner-text="data?.title"
        class-name="flex justify-center w-full uppercase mb-8"
      />
    </header>
    <section class="prose prose-lg flex-1 max-w-none text-left w-full">
      <ContentRenderer :value="data!" class="w-full"/>
    </section>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";

const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne(),
);
</script>
