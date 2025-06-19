<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <div class="permission-button" @click="emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.permission-button {
  padding: 13px 30px;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.3s linear;
  border-radius: px2vw(19);

  &:hover {
    background: #0077f0;
  }
}
</style>
