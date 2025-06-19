<script setup>
const props = defineProps({
  icon: String,
  stepIndex: Number,
  title: String,
  content: String,
  t:Function
})
</script>

<template>
  <div class="step-item-container flex flex-column flex-vertical-center">
    <img :src="icon" alt="" class="icon-img" />
    <div class="title-wrap flex flex-vertical-center">
      <div class="index-box">
        <img src="@/assets/img/service/advantage/process/star-1.png" alt="" class="title-icon" />
        <span class="step-index">{{ props.stepIndex }}</span>
      </div>
      <div class="title">{{ t(props.title) }}</div>
    </div>
    <div class="content">{{ t(props.content) }}</div>
  </div>
</template>

<style scoped lang="scss">

.step-item-container {
  width: 260px;
  height: 330px;
  background: #7664ff;
  border-top-right-radius: 50px;
  gap: 15px;
  position: relative;
  padding-top: 44px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 140px;
    height: 3px;
    background: #ffffff;
    left: 50%;
    bottom: 6px;
    transform: translateX(-50%);
    transition: width 300ms linear;
  }

  &:hover:after {
    width: 80%;
  }

  .icon-img {
    width: 70px;
  }

  .title-wrap {
    padding: 0 5px;
    .index-box {
      position: relative;
      font-size: 0;

      .title-icon {
        width: 40px;
      }

      .step-index {
        font-size: var(--desc-fz--small);
        color: #7664ff;
        font-weight: bolder;
        position: absolute;
        line-height: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    }

    .title {
      width: fit-content;
      max-width: 176px;
      margin-left: 6px;
      font-size: var(--desc-fz--default);
      color: #ffffff;
      font-weight: bolder;
      text-align: center;
    }
  }

  .content {
    font-size: var(--desc-fz--small);
    color: #ffffff;
    text-align: center;
    line-height: 26px;
    padding: 0 10px;
  }
}
</style>
