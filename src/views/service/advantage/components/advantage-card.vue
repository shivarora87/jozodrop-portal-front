<script setup>
const props = defineProps({
  iconName: String,
  title: String,
  desc: String,
  t:Function
})
const getIcon = () =>
  new URL(`/src/assets/img/service/advantage/advantage/${props.iconName}.png`, import.meta.url).href
</script>

<template>
  <div class="advantage-card-container flex">
    <div class="icon-box flex flex-horizontal-center flex-vertical-center">
      <img :src="getIcon()" alt="" class="icon-img" />
    </div>
    <div class="content-box">
      <div class="title">{{ t(props.title) }}</div>
      <div class="desc">{{ t(props.desc) }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.advantage-card-container {
  padding: 25px;
  background: #ffffff;
  border-top-right-radius: 50px;
  box-shadow: rgb(200, 224, 255) 10.3289px 10.3289px 0px 0px;
  align-items: center;

  .icon-box {
    width: 120px;
    height: 160px;
    background: #f1f7ff;
    margin-right: 20px;
    flex-shrink: 0;

    .icon-img {
      width: 100px;
    }
  }

  .content-box {
    color: #000000;
    width: 300px;

    .title {
      font-size: var(--desc-fz--default);
      font-weight: bolder;
      margin-bottom: 13px;
    }

    .desc {
      font-size: var(--desc-fz--small);
      line-height: 26px;
    }
  }
}
</style>
