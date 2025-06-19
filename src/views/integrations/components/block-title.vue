<script setup>
const props = defineProps({
  label: String,
  circleColor: String
})
</script>

<template>
  <div class="block-title">
    <span class="label">{{ props.label }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.block-title {
  position: relative;

  &:before {
    content: '';
    display: block;
    width: px2vwV2(96);
    height: px2vwV2(96);
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -20%);
    border-radius: 50%;
    border-bottom-right-radius: 0;
    background: v-bind('props.circleColor');
    transition: all 300ms ease;
  }

  &:hover:before {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 0;
  }

  .label {
    color: #ff9000;
    font-size: px2vwV2(45);
    font-weight: bolder;
    position: relative;
    z-index: 2;
  }
}
</style>
