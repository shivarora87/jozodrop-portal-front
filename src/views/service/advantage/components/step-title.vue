<script setup>
const props = defineProps({
  iconName: String,
  index: String,
  title: String,
  content: String
})
const getIcon = () => {
  return new URL(`/src/assets/img/service/advantage/process/${props.iconName}.png`, import.meta.url)
    .href
}
</script>

<template>
  <div class="step-title-container flex">
    <img :src="getIcon()" alt="" class="top-icon" />
    <div class="right-content">
      <div class="top-title-box flex flex-vertical-center">
        <div class="title-icon-box">
          <img src="@/assets/img/service/advantage/process/star-2.png" alt="" class="title-icon" />
          <div class="title-icon-label">{{ props.index }}</div>
        </div>
        <div class="title">{{ props.title }}</div>
      </div>
      <div class="content">{{ props.content }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-title-container {
  .top-icon {
    width: 90px;
    margin-right: 8px;
  }

  .right-content {
    .top-title-box {
      margin-bottom: 10px;

      .title-icon-box {
        margin-right:  10px;
        font-size: 0;
        position: relative;

        .title-icon {
          width: 43px;
        }

        .title-icon-label {
          position: absolute;
          font-size:var(--desc-fz--small);
          color: #ffffff;
          font-weight: bolder;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .title {
        font-size: var(--desc-fz--default);
        font-weight: bolder;
        color: #7664ff;
      }
    }

    .content {
      margin-left: 7px;

      font-size: var(--desc-fz--small);
      line-height:22px;
      color: #000000;
    }
  }
}
</style>
