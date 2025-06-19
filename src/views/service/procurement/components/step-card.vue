<script setup>
const props = defineProps({
  index: [String, Number],
  desc: String
})
</script>

<template>
  <div class="step-card-container flex flex-vertical-center">
    <div class="icon-box">
      <img src="@/assets/img/service/procurement/process/index-bg.png" alt="" class="icon-img" />
      <div class="index">{{ props.index }}</div>
    </div>
    <div class="desc">{{ props.desc }}</div>
  </div>
</template>

<style scoped lang="scss">
.step-card-container {
  background: #ffffff;
  padding: 18px 14px;
  border-radius: 11px;

  .icon-box {
    padding: 6px;
    background: #0077f0;
    border-radius: 25px;
    border-bottom-right-radius: 8px;
    font-size: 0;
    position: relative;
    margin-right: 22px;

    .icon-img {
      width: 68px;
    }

    .index {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%);
      font-size: var(--desc-fz--large);
      color: #ffffff;
      font-weight: bolder;
      text-decoration: underline;
      line-height: 1;
    }
  }

  .desc {
    width: 555px;
    color: #000000;
    font-size: var(--desc-fz--default);
    line-height: 24px;
  }
}
</style>
