<template>
  <header
    class="border-b-2 border-gray-700 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3 md:py-12 lg:h-[100px] lg:px-40"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <nuxt-link to="/" class="text-r-black text-2xl font-bold"
          >NK.</nuxt-link
        >
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
    <nav :class="isOpen ? '' : 'hidden'" class="gap-4 py-4 sm:flex sm:p-0">
      <template v-for="(navItem, idx) in navbarList" :key="idx">
        <nuxt-link
          :to="navItem.path"
          class="font-norma block rounded py-1 text-lg"
        >
          <GlobalText as="span">{{ navItem.name }}</GlobalText>
        </nuxt-link>
      </template>
      <GlobalLanguageSwitcher />
    </nav>
  </header>
  <MobileNavbar v-model:isOpen="isOpen" :navbarList="navbarList" />
</template>

<script setup lang="ts">
import GlobalText from "~/components/global/Text.vue";
import GlobalLanguageSwitcher from "@/components/global/LanguageSwitcher.vue";
import MobileNavbar from "@/components/local/layout/MobileNavbar.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const isOpen = ref(false);

const navbarList = computed(() => [
  { name: t("layout.navbar.list.about"), path: "/about" },
  { name: t("layout.navbar.list.services"), path: "/services" },
  { name: t("layout.navbar.list.documents"), path: "/documents" },
  { name: t("layout.navbar.list.contact"), path: "/contact" },
]);
</script>

<style>
.router-link-active h2 {
  @apply font-bold underline underline-offset-1;
}
</style>
