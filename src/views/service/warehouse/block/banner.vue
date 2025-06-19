<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container ">
    <div class="content-wrap flex flex-horizontal-center">
      <img src="@/assets/img/service/warehouse/banner/banner-img.png" alt="" class="banner-img" />
      <div class="right-content-box">
        <BannerTitle class="banner-title" :title="t('t1')" />
        <div class="desc">
          <span class="blue">JOZO</span>
          {{t('t2')}}
        </div>
        <img src="@/assets/img/service/warehouse/banner/logo.png" alt="" class="logo-img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.banner-container {
  padding-bottom: 38px;
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-left-radius: 71px;
  padding-top: 57px;

  .banner-img {
    width: 553px;
  }

  .right-content-box {
    margin-top: -15px;

    .banner-title {
      margin-bottom: 28px;
    }

    .desc {
      font-size: var(--desc-fz--default);
      line-height: 27px;
      width: 525px;
      margin-bottom: 17px;

      .blue {
        color: #0077f0;
      }
    }

    .logo-img {
      width: 360px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "WAREHOUSE",
    "t2": "Warehouse Department provides customers with   comprehensive logistics support and solutions, helping them reduce inventory costs, increase     inventory turnover, and optimize logistics efficiency to achieve supply chain optimization and sustainable business development."
  },
  "vn": {
    "t1": "Trang chủ",
    "t2": "Warehouse cung cấp cho khách hàng các giải pháp và hỗ trợ hậu cần toàn diện giúp họ giảm chi phí hàng tồn kho, cải thiện doanh thu hàng tồn kho, tối ưu hóa hiệu quả hậu cần, tối ưu hóa chuỗi cung ứng và phát triển kinh doanh bền vững."
  }
}
</i18n>
