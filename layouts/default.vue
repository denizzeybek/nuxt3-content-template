<template>
  <template>
    <main
      class="bg-r-white flex flex-1 flex-col rounded-lg p-2 lg:mb-5 lg:px-40"
    >
      <div id="alert" class="alert"></div>
      <Navbar />
      <section class="h-100vh flex flex-1 flex-col rounded-b-lg">
        <slot />
      </section>
      <Footer />
    </main>
  </template>
</template>
<script setup lang="ts">
import Navbar from "~/components/local/layout/Navbar.vue";
import Footer from "~/components/local/layout/Footer.vue";
</script>
