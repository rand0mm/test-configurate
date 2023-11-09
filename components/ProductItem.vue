<template>
  <div class="item">
   <div class="item__content">
   <h4>
    {{ item.content }}
   </h4>
   </div>
   <div class="item__actions">
    <Button @click="updateCount(true)" class="item__btn">+</Button>
    <div class="item__count-display">
      {{ item.count }}
    </div>
    <Button @click="updateCount(false)" class="item__btn">-</Button>
   </div>
  </div>
</template>

<script setup>
const { modelValue } = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
const item = ref(modelValue)

const updateCount = (plus) => {
  if(plus) {
    item.value.count++;
  } else if (!plus && item.value.count > 0) {
    item.value.count--;
  }
}

watch(item, () => {
  emits('update:modelValue', Object.assign(modelValue, item))
});

</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: calc((100% - 4rem) / 4);
  &__content {
    margin-bottom: 1rem;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    width: calc((100% - 3rem) / 2);
    font-size: .7rem;
  }
  &__count-display {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
