<template>
  <main class="content container">
    <Product-list :products="products" />
  </main>
</template>

<script setup>
import { watch } from "vue";
import { useProductsStore } from "@/store/products";
import { useConfigurateStore } from "@/store/configurate";

const store = useProductsStore();
const store2 = useConfigurateStore();
const products = computed(() => {
  return store.products.filter((i) => {
    return Number(i.id) <= toView.value;
  });
});
const toView = computed(() => store2.config.drinks.value);
</script>