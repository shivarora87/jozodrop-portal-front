<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useFetch from '@/utils/useFetch'

const { query } = useRoute()
const detail = ref({})
const baseUrl = ref(import.meta.env.PROD ? '' : 'http://xxx.com')
onMounted(async () => {
  try {
    const res = await useFetch(`/portal/${query.id}`)
    detail.value = res
  } catch (e) {
  }
})
</script>

<template>
  <div class="block-detail-container flex flex-horizontal-center">
    <div class="content-wrap">
      <div class="title">{{ detail.title }}</div>
      <div class="flex flex-horizontal-center">
        <img :src="`${baseUrl}${detail.mainUrl}`" alt="" class="main-img">
      </div>
      <div v-html="detail.contentDetail" class="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.block-detail-container {
  padding-top: 4.01042vw;
  padding-bottom: 6.5625vw;
  background: #ffffff;

  .content-wrap {
    width: 65.10417vw;

    .title {
      font-size: 2.1875vw;
      font-weight: 700;
      color: #161b1a;
      line-height: 2.29167vw;
      margin-bottom: 1.92708vw;
    }

    .main-img {
      max-width: 100%;
      margin-bottom: 1.92708vw;
    }

    :deep(.content) {
      img {
        max-width: 100%;
      }
    }
  }
}

</style>
