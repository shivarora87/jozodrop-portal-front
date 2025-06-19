<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-horizontal-center flex-vertical-top ">
      <img src="@/assets/img/service/valueAddedService/banner/img-1.png" alt="" class="left-img" />
      <div class="right-box">
        <BannerTitle :title="t('t1')" class="block-title" />
        <div class="desc">
          {{t('t2')}}
        </div>
        <img src="@/assets/img/service/valueAddedService/banner/img-2.png" alt="" class="right-img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-left-radius: 71px;
  padding-top: 57px;
  padding-bottom: 10px;

  .left-img {
    width: 470px;
    margin-right: 14px;
    margin-top: 12px;
    border-radius: 22px;
    border-top-right-radius: 80px;
  }

  .right-box {
    .block-title {
      margin-bottom: 34px;
    }

    .desc {
      font-size: var(--desc-fz--default);
      line-height: 27px;
      color: #000000;
      margin-bottom: 46px;
    }

    .right-img {
      width: 365px;
      margin-left: 5px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "BRAND CUSTOMIZATION SERVICE",
    "t2": "JOZO offers customized services such as logos, cards, packaging, and shipping according to your needs to enhance your user experience. Advantages: We provide personalized services, products, and suggestions to help you establish your brand and attract more loyal customers."
  },
  "vn": {
    "t1": "Dịch vụ tùy chỉnh thương hiệu",
    "t2": "JOZO cung cấp các dịch vụ tùy chỉnh như logo, thẻ, bao bì và vận chuyển theo nhu cầu của bạn để nâng cao trải nghiệm người dùng của bạn. Ưu điểm: Chúng tôi cung cấp dịch vụ, sản phẩm và đề xuất được cá nhân hóa để giúp bạn xây dựng thương hiệu và thu hút nhiều khách hàng trung thành hơn."
  }
}
</i18n>
