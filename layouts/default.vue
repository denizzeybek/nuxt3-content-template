<template>
  <div class="flex min-h-screen flex-col !bg-gray-100">
    <Navbar />
    <main
      class="flex flex-1 flex-col p-12 min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-100px)] lg:px-40"
    >
      <slot />
    </main>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/local/layout/Navbar.vue";
import Footer from "~/components/local/layout/Footer.vue";

const route = useRoute();

const showFooter = computed(() => {
  return route.path !== "/contact";
});
</script>
