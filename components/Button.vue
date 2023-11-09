<template>
  <button class="btn">
    {{ caption }}
    <slot/>
  </button>
</template>

<script setup>
const props = defineProps({
  caption: String
})
</script>


<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $size1 $size4;
  transition: background-color 0.3s ease;
  background-color: $mainpurple;
  border-radius: 1rem;
  border: 0;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: $whiteColor;
  &:hover,
  &:focus-within {
    background-color: $maindarkpurple;
  }
}
</style>