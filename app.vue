<template>
  <html>
    <body>
      <header class="header">
        <div class="header__wrapper">
          <NuxtLink class="btn" to="/">
            На главную
          </NuxtLink>
          <h1 class="header__info">Конфигуратор</h1>
          <NuxtLink class="btn" to="/menu">
            К меню
          </NuxtLink>
        </div>
      </header>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <div id="teleport-target"></div>
    </body>
  </html>
</template>

<script setup>
import { watch } from "vue";
import { useConfigurateStore } from "@/store/configurate";
import { useProductsStore } from "@/store/products";

const store = useConfigurateStore();
const store2 = useProductsStore();

const size = computed(() => store.config?.size.value);

try {
  const { data } = await useFetch('http://localhost:3000/api/options')
  store.setData(data.value.config)
  store2.setData(data.value.products)
} catch (error) {
  store.getLocal();
  store2.getLocal();
}


document.documentElement.style.fontSize = size.value === "default" ?  `16px` : `20px`;
watch(size, () => {
  document.documentElement.style.fontSize = size.value === "default" ?  `16px` : `20px`;
})

</script>



<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  padding: $size1 $size4;
  transition: background-color 0.3s ease;
  background-color: $primaryColor-3;
  border-radius: 1rem;
  border: 0;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: #000000;
  color: $whiteColor;
  transition: background-color 0.3 ease;
  &:hover,
  &:focus-within {
    background-color: $primaryColor-4;
  }
}
</style>
