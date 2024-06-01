<template>
  <header class="sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3 lg:px-40 md:py-12 ">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <nuxt-link to="/" class="text-r-black text-2xl">NK.</nuxt-link>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? '' : 'hidden'" class="px-2 pb-4 pt-2 sm:flex sm:p-0">
      <template v-for="(navItem, idx) in navbarList" :key="idx">
        <nuxt-link
          :to="navItem.path"
          class="block rounded px-2 py-1 font-semibold text-white"
        >
          <GlobalText as="h2">{{ navItem.name }}</GlobalText>
        </nuxt-link>
      </template>
    </nav>
  </header>
  <MobileNavbar v-model:isOpen="isOpen" :navbarList="navbarList" />
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
import MobileNavbar from "@/components/local/layout/MobileNavbar.vue";

const isOpen = ref(false);

const navbarList = [
  { name: "Hakkımızda", path: "/" },
  { name: "Hizmetlerimiz", path: "/services" },
  { name: "Makaleler", path: "/documents" },
  { name: "İletişim", path: "/" },
];
</script>
