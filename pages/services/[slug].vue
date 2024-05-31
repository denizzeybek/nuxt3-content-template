<template>
  <main>
    <header>
        <h1>title: {{ data?.title }}</h1>
        <h2 class="mb-5">description: {{ data?.description }}</h2>
        <h5>author: {{ data?.author }}</h5>
    </header>
    <ContentRenderer :value="data!" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>

<style scoped></style>
