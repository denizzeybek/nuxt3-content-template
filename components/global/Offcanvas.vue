<template>
  <div
    v-if="isOpen"
    @click="handleClose"
    class="fixed inset-0 z-30 max-w-full bg-d-shadow bg-opacity-50"
  ></div>
  <section
    class="fixed bottom-0 left-0 right-0 top-0 z-40 w-full translate-x-[103%] overflow-y-auto rounded-none bg-d-white p-3 transition-transform duration-300 sm:bottom-3 sm:left-auto sm:right-3 sm:top-3 sm:w-[500px] sm:rounded-lg sm:p-11"
    tabindex="-1"
    :class="{ '!translate-x-0': isOpen, [offcanvasClass]: offcanvasClass }"
  >
    <header class="relative flex items-center justify-end gap-4">
      <GlobalButton
        v-if="isBackButtonVisible"
        @click="handleBackButtonClick"
        variant="light"
        class="flex h-[52px] min-w-[52px] items-center justify-center rounded-full"
      >
        kapat
      </GlobalButton>
      <RText as="h1">{{ title }}</RText>
    </header>
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
import GlobalButton from "@/components/global/Button.vue";
export interface IProps {
  title?: string;
  isOpen: boolean;
  onBackButtonClick?: () => void;
  isBackButtonVisible?: boolean;
  offcanvasClass?: any;
}

const props = withDefaults(defineProps<IProps>(), {
  isBackButtonVisible: true,
});

type IEmits = (event: "update:isOpen", value: boolean) => void;
const emit = defineEmits<IEmits>();

const handleClose = () => {
  emit("update:isOpen", false);
};

const handleBackButtonClick = () => {
  if (props.onBackButtonClick) {
    props.onBackButtonClick();
  } else {
    handleClose();
  }
};
</script>
