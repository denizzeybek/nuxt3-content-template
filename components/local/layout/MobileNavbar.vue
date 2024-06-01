<template>
  <GlobalOffcanvas
    :isOpen="isOpen"
    @update:isOpen="(v: boolean) => $emit('update:isOpen', v)"
    offcanvas-class="sm:!w-[۴۲۸px]"
  >
    <div class="mt-8" v-for="(navItem, idx) in navbarList" :key="idx">
      <nuxt-link
        :to="navItem.path"
        @click="() => $emit('update:isOpen', false)"
        class="text-whit block rounded px-2 py-1 font-semibold"
      >
        <GlobalText as="h2">{{ navItem.name }}</GlobalText>
      </nuxt-link>
    </div>
  </GlobalOffcanvas>
</template>

<script setup lang="ts">
import GlobalOffcanvas from "@/components/global/Offcanvas.vue";
import GlobalText from "@/components/global/Text.vue";

interface IProps {
  isOpen: boolean;
  navbarList: { name: string; path: string }[];
}
defineProps<IProps>();

type IEmits = (event: "update:isOpen", value: boolean) => void;
const emit = defineEmits<IEmits>();
</script>

<style scoped></style>
