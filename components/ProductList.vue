<template>
  <div class="items">
    <Product-item
      v-for="(product, i) in products"
      :key="product.id"
      v-model="products[i]"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
.items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
</style>

