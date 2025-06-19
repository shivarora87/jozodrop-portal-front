<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="banner-title-container flex flex-vertical-center">{{ props.title }}</div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';
.banner-title-container {
  color: #0077f0;
  font-size: var(--block-title-fz);
  font-weight: bolder;
  position: relative;
  text-decoration: underline #0077f0;
  text-underline-offset: px2vwV2(6);
  gap: px2vwV2(25);

  &:before {
    content: '';
    display: block;
    width: px2vwV2(44);
    height: px2vwV2(44);
    border-radius: px2vwV2(8);
    background: #0077f0;
    box-shadow: px2vwV2(-10) px2vwV2(-10) 0 0 #76b5f7;
    transform: translateY(px2vwV2(6));
  }
}
</style>
