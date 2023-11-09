<template>
  <div class="large">
    <slot />
  </div>
</template>

<script setup>
import { useConfigurateStore } from "@/store/configurate";
const store = useConfigurateStore();
const background = computed(() => store.config.background);


</script>

<style scoped lang="scss">
.large {
  display: flex;
  padding: 1rem 2rem;
  background-color: v-bind('background.value');
}
</style>