<template>
  <div class="configurate">
    <div class="configurate__display">
      <div v-for="(param, i) in options" :key="i">
        <h3>
          {{ config[param].caption }}:
          {{ config[param].options[config[param].value] }}
        </h3>
      </div>
    </div>
    <Button class="configurate__btn-save" @click="saveConfig">
      Добавить в хранилище
    </Button>
    <div class="configurate__options">
      <OptionSelector
        v-for="(param, i) in options"
        :key="i"
        v-model="config[param]"
      />
    </div>
  </div>
</template>

<script setup>
import { useConfigurateStore } from "@/store/configurate";

const store = useConfigurateStore();
const config = computed(() => store.config);

const options = computed(() => {
  return Object.keys(config.value);
});

const saveConfig = () => {
  localStorage.setItem("config", JSON.stringify(config.value));
};
</script>


<style scoped lang="scss">
.configurate {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  &__display {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-bottom: 1px solid #d1dce5;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  &__btn-save {
    align-self: center;
    width: 20rem;
  }
  &__options {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>  