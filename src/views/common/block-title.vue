<script setup>
const props = defineProps({
  label: String,
  color:String
})
</script>

<template>
  <div class="block-title">{{ props.label }} </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.block-title {
  color: v-bind('color');
  font-size: var(--block-title-fz);
  font-weight: bolder;
}

@media screen and (max-width: 1200px) {
  .block-title {
  }
}
</style>
