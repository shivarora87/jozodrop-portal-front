<script setup>
import BannerTitle from '@/views/common/banner-title.vue'

import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-horizontal-center flex-vertical-bottom" >
      <div class="left-box">
        <BannerTitle :title="t('title')" class="block-title" />
        <div class="desc">
          "{{ t('desc') }}"
        </div>
        <div class="img-box">
          <img src="@/assets/img/aboutUs/jozo/banner/img-1.png" alt="" class="img-1" />
        </div>
      </div>
      <img src="@/assets/img/aboutUs/jozo/banner/img-2.png" alt="" class="right-img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-left-radius: 71px;
  padding-top: 57px;
  padding-bottom: 10px;

  .left-box {
    margin-right: 41px;
    .block-title {
      margin-bottom: 34px;
    }

    .desc {
      font-size:var(--desc-fz--default);
      line-height: 27px;
      color: #000000;
      margin-bottom: 28px;
    }

    .img-box {
      .img-1 {
        width: 630px;
      }
    }
  }

  .right-img {
    width: 400px;
    padding-bottom: 9px;
  }
}
</style>

<i18n>
  {
    "en": {
      "title": "WHAT IS JOZODROP?",
      "desc": "Providing efficient and reliable supply chain services for global dropshipping and
independent site entrepreneurs, empowering them to achieve business growth and pursue their
entrepreneurial dreams freely."
    },
    "vn": {
      "title": "JOZODROP là gì?",
      "desc": "Cung cấp dịch vụ chuỗi cung ứng hiệu quả và đáng tin cậy cho Dropshipping toàn cầu
Các doanh nhân trang web độc lập cho phép họ phát triển kinh doanh và theo đuổi
Giấc mơ khởi nghiệp tự do"
    }
  }
</i18n>
