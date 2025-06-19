<script setup>
const props = defineProps({
  size: {
    type: String,
    default: '11px'
  },
  color: {
    type: String,
    default: '#0077f0'
  }
})
</script>

<template>
  <div class="circle-dot-container" />
</template>

<style scoped lang="scss">
.circle-dot-container {
  border-radius: 50%;
  width: v-bind('props.size');
  height: v-bind('props.size');
  background: v-bind('props.color');
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: v-bind('props.color');
    opacity: 0.2;
    transform: scale(1.6);
    border-radius: 50%;
  }
}
</style>
