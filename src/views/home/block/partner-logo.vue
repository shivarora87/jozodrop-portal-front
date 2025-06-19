<script setup>
import { ref } from 'vue'
import BlockTitle from '@/views/common/block-title.vue'
import { Vue3Marquee } from 'vue3-marquee'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

const partnerImgs = import.meta.glob('@/assets/img/home/partner-logo/*.png', { eager: true })
const getPlatformDataIcon = (fileName) => {
  const baseUrl = `/src/assets/img/home/partner-logo/${fileName}.png`
  return partnerImgs[baseUrl].default
}
const row1Imgs = ['skype', 'usps', 'ebay', 'jTexpress', 'dhl', 'shopify', 'woo','ups','dianxiaomi'].map(
  getPlatformDataIcon
)
const row2Imgs = ['4px', 'fedex','yanwen', 'yunexpress', 'amazon', 'lazada', 'youTube','cainiao'].map(
  getPlatformDataIcon
)
const row1List = ref(row1Imgs)
const row2List = ref(row2Imgs)
</script>

<template>
  <div class="partner-logo-container">
    <div class="flex flex-horizontal-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
    </div>
    <div class="scroll-wrap">
      <Vue3Marquee clone class="marquee-1" gradient pauseOnHover>
        <img v-for="img in row1List" :key="img" :src="img" class="partner-logo-img" />
      </Vue3Marquee>
      <Vue3Marquee clone gradient pauseOnHover>
        <img v-for="img in row2List" :key="img" :src="img" class="partner-logo-img" />
      </Vue3Marquee>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner-logo-container {
  background: #ffffff;
  padding: 140px 0;

  .block-title {
    margin-bottom: 70px;
  }

  .scroll-wrap {
    .marquee-1 {
      margin-bottom: 40px;
    }

    .partner-logo-img {
      width: 200px;
      margin: 0 20px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "PARTNER LOGO"
  },
  "vn": {
    "t1": "Logo đối tác"
  }
}
</i18n>
