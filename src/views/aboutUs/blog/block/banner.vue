<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-horizontal-center flex-vertical-bottom">
      <img src="@/assets/img/aboutUs/blog/banner/img-1.png" alt="" class="left-img" />
      <div class="right-box">
        <BannerTitle :title="t('t1')" class="block-title" />
        <div class="desc">
          {{t('t2')}}
        </div>
        <div class="img-box">
          <img src="@/assets/img/aboutUs/blog/banner/img-2.png" alt="" class="img-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-right-radius: 71px;
  padding-top: 57px;
  padding-bottom: 10px;

  .right-box {
    margin-right: 41px;

    .block-title {
      margin-bottom: 34px;
    }

    .desc {
      width: 630px;
      font-size: var(--desc-fz--default);
      line-height: 27px;
      color: #000000;
      margin-bottom: 28px;
    }

    .img-box {
      .img-1 {
        width: 754px;
      }
    }
  }

  .left-img {
    width: 369px;
    margin-right: 16px;
  }
}
</style>

<i18n>
  {
    "en": {
      "t1": "JOZODROP BLOG",
      "t2": "Good product, Maybe you don't know which item you can sell the online store. You may search
        some of them on google or facebook. Maybe it's toys, pets, home & garden, women fashion,
        men's fashion, phone & accessories and so on."
    },
    "vn": {
      "t1": "Blog của Jozodrop",
      "t2": "Sản phẩm tốt, có lẽ bạn không biết những gì bạn có thể bán trong một cửa hàng trực tuyến. Bạn có thể tìm kiếm
Một số trong số đó có trên Google hoặc Facebook. Có lẽ đồ chơi, vật nuôi, nhà và vườn, thời trang nữ,
Quần áo nam, điện thoại di động và phụ kiện......"
    }
  }
  </i18n>
