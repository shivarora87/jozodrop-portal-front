<script setup>
import BlockTitle from '@/views/common/block-title.vue'

</script>

<template>
  <div class="affiliates-container">
    <div class="content-wrap">
      <div class="flex flex-horizontal-center">
        <BlockTitle
          label="J0Z0 provides a platform user recommendation reward program"
          color="#f59a23"
          class="title" />
      </div>
      <div class="img-container">
        <img src="@/assets/img/home/affiliates/web.png" alt="" class="web-img">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.affiliates-container {
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: #ffffff;

  .img-container {
    padding: 80px;
    text-align: center;

    .web-img {
     width: 100%;
    }
  }
}
</style>
