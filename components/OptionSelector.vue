
<template>
  <div class="option">
    <h3 class="option__caption">{{ select.caption }}</h3>
    <div class="option__list">
      <Button
        :class="{ 'btn--chosen': select.value === option }"
        v-for="(option, i) in options"
        :key="i"
        :caption="select.options[option]"
        @click="updateselect(option)"
      />
    </div>
  </div>
</template>

<script setup>
import { callback } from "@/helpers/confingCallbacks";
const { modelValue } = defineProps(["modelValue"]);
const select = ref(modelValue);

const options = computed(() => {
  return Object.keys(select.value.options);
});

const updateselect = (newValue) => {
  select.value.value = newValue;
  if (select.value.callback && select.value.callback.length > 0) {
    callback.size(newValue);
  }
};
</script>


<style scoped lang="scss">
.option {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: $size1 $size4;
  border: 0;
  &__caption {
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 5rem;
      margin-bottom: 0.3rem;
      margin-left: 0.3rem;
      &--chosen {
        background-color: $mainblue;
      }
    }
  }
}
</style>    