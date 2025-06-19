<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container ">
    <div class="content-wrap flex flex-horizontal-center flex-vertical-bottom" >
      <div class="left-box">
        <BannerTitle :title="t('t1')" class="block-title" />
        <div class="desc">
          {{t('t2')}}
        </div>
        <div class="img-box flex flex-vertical-bottom">
          <img src="@/assets/img/service/logistics/banner/img-1.png" alt="" class="img-1" />
          <img src="@/assets/img/service/logistics/banner/img-2.png" alt="" class="img-2" />
        </div>
      </div>
      <img src="@/assets/img/service/logistics/banner/img-3.png" alt="" class="right-img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-right-radius: 71px;
  padding-top: 57px;
  padding-bottom: 10px;

  .left-box {
    .block-title {
      margin-bottom: 34px;
    }

    .desc {
      width: 473px;
      font-size: var(--desc-fz--default);
      line-height: 27px;
      color: #000000;
    }

    .img-box {
      margin-top: -11px;
      .img-1 {
        width: 294px;
        margin-right: 96px;
      }

      .img-2 {
        width: 195px;
      }
    }
  }

  .right-img {
    width: 533px;
    margin-left: -42px;
    //padding-bottom: px2vwV2(20);
  }
}
</style>


<i18n>
{
  "en": {
    "t1": "JOZO LOGISTICS",
    "t2": "Logistics is an extremely important aspect of Dropshipping, so JOZO places great emphasis on the diversity and practicality of logistics providers to help improve customer satisfaction, optimize transportation efficiency, enhance brand image, and achieve sustainable business growth."
  },
  "vn": {
    "t1": "Jozo hậu cần",
    "t2": "Logistics là một khía cạnh cực kỳ quan trọng của Dropshipping, vì vậy JOZO rất coi trọng sự đa dạng và tiện ích của các nhà cung cấp dịch vụ logistics để giúp nâng cao sự hài lòng của khách hàng, tối ưu hóa hiệu quả vận chuyển, nâng cao hình ảnh thương hiệu và tăng trưởng kinh doanh bền vững."
  }
}
</i18n>
