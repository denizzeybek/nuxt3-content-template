<template>
  <main>
    <header>
      <GlobalText
        as="h1"
        :inner-text="data?.title"
        class-name="flex justify-center w-full uppercase mb-8"
      />
    </header>
    <div class="prose prose-lg flex-1 text-left">
      <ContentRenderer :value="data!" class="content-doc" />
    </div>
  </main>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";

const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne(),
);
</script>
