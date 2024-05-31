<template>
  <div>
    <div>
      <p>Counter: {{ getCount }}</p>
      <button type="button" @click="increment">Increment</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;
    return { getCount, increment };
  },
});
</script>
