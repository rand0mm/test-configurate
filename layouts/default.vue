<template>
  <div class="default">
    <slot />
  </div>
</template>

<script setup>
import { useConfigurateStore } from "@/store/configurate";
const store = useConfigurateStore();
const background = computed(() => store.config.background);

</script>

<style scoped lang="scss">
.default {
  display: flex;
  padding: 1rem;
  background-color: v-bind('background.value');
}
</style>