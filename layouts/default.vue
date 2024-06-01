<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main
      class="bg-r-white flex flex-1 flex-col rounded-lg p-2 lg:mb-5 lg:px-40"
    >
      <div id="alert" class="alert"></div>
      <section class="flex min-h-full flex-1 flex-col rounded-b-lg">
        <slot />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/local/layout/Navbar.vue";
import Footer from "~/components/local/layout/Footer.vue";
</script>
