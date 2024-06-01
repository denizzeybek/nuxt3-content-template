<template>
    <button
      :type="buttonType"
      :class="[variant, className]"
      :data-selected="isSelected"
      :disabled="isDisabledOrLoading"
      @click="emitClickEvent"
    >
      <RSpinner v-if="isLoading" size="small" />
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts" setup>
  import type { HTMLAttributes } from 'vue'
  import { computed, withDefaults } from 'vue'
  
  // Interface for Props
  export interface ButtonProps {
    buttonType?: 'button' | 'submit' | 'reset'
    isDisabled?: boolean
    isLoading?: boolean
    variant?:
      | 'primary'
      | 'danger'
      | 'light'
      | 'select'
      | 'outlined-primary'
      | 'outlined-secondary'
      | 'outlined-danger'
      | 'success'
      | 'warning'
    isSelected?: boolean
    className?: HTMLAttributes['class']
  }
  
  // Default Prop Values
  const props = withDefaults(defineProps<ButtonProps>(), {
    buttonType: 'button',
    isDisabled: false,
    isLoading: false,
    variant: 'primary'
  })
  
  // Emits
  const emit = defineEmits(['click'])
  
  // Computed Properties
  const isDisabledOrLoading = computed(() => props.isDisabled || props.isLoading)
  
  // Methods
  const emitClickEvent = (event: Event) => {
    emit('click', event)
  }
  </script>
  
  <style scoped lang="scss">
  button {
    @apply font-semibold rounded-lg text-sm px-4 py-3 whitespace-nowrap ml-0 flex justify-center items-center gap-1.5;
  }
  
  button:disabled {
    @apply cursor-not-allowed pointer-events-none select-none;
  }
  
  button.primary {
    @apply bg-d-primary hover:bg-d-primary-hovered text-d-white;
  }
  
  button.primary:active {
    @apply ring-4 ring-d-primary ring-opacity-40;
  }
  
  button.primary:disabled {
    @apply bg-d-primary bg-opacity-40;
  }
  
  button.danger {
    @apply bg-d-red hover:bg-d-red-dark text-d-white;
  }
  
  button.danger:active {
    @apply ring-4 ring-d-red ring-opacity-40;
  }
  
  button.danger:disabled {
    @apply bg-d-red bg-opacity-40;
  }
  
  button.outlined-danger {
    @apply border-d-red border text-d-red bg-d-white hover:bg-d-red/10;
  }
  
  button.outlined-danger:active {
    @apply ring-2 ring-d-red;
  }
  
  button.outlined-danger:disabled {
    @apply border-d-red bg-d-white text-d-red opacity-40;
  }
  
  button.outlined-primary {
    @apply border-d-primary border text-d-primary bg-transparent hover:bg-d-primary/10;
  }
  
  button.outlined-primary:active {
    @apply ring-2 ring-d-primary;
  }
  
  button.outlined-primary:disabled {
    @apply border-d-primary bg-transparent text-d-primary opacity-40;
  }
  
  button.outlined-secondary {
    @apply border-d-secondary border text-d-secondary bg-transparent hover:bg-d-primary/15;
  }
  
  button.outlined-secondary:active {
    @apply ring-2 ring-d-secondary;
  }
  
  button.outlined-secondary:disabled {
    @apply border-d-secondary bg-transparent text-d-secondary opacity-40;
  }
  
  button.light {
    @apply text-d-black bg-white border border-d-stroke  hover:bg-d-off-white py-[11px];
  }
  
  button.light:active {
    @apply ring-4 ring-d-stroke ring-opacity-40;
  }
  
  button.light:disabled {
    @apply bg-white opacity-50;
  }
  
  button.select {
    @apply text-d-black bg-white border border-d-stroke   py-[11px];
  }
  
  button.select:hover {
    @apply border-d-primary text-d-primary;
  }
  
  button.select:active,
  button.select[data-selected='true'] {
    @apply bg-d-primary bg-opacity-10 border-d-primary text-d-primary;
  }
  
  button.select:disabled {
    @apply bg-white opacity-50 border-d-stroke text-d-black;
  }
  
  button.success {
    @apply bg-d-green text-d-white;
  }
  
  button.warning {
    @apply bg-d-orange text-d-white;
  }
  </style>
  