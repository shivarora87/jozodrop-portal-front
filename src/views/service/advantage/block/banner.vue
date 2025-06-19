<script setup>
import Typed from 'typed.js'
import { onMounted, onUnmounted, ref } from 'vue'
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

const $content = ref()
onMounted(() => {
  // const typed = new Typed($content.value, {
  //   strings: ['Shopify is an e-commerce platform that allows anyone to setup their store and sell products.^1000\nThis subscription-basedsoftware is one of the most accessible platforms for startingmerchants and dropshippers.'],
  //   typeSpeed: 20,
  //   backSpeed: 0,
  //   backDelay: 5000,
  //   loop: true
  // })
  // onUnmounted(() => {
  //   typed.destroy()
  // })
})
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-horizontal-center flex-vertical-center" >
      <img src="@/assets/img/service/advantage/banner/img.png" alt="" class="banner-img" />
      <div class="right-wrap flex flex-column">
        <BannerTitle :title="t('t1')" />
        <!--<span ref="$content" class="desc"></span>-->
        <div class="desc-box">
          <div class="desc">
            {{t('t2')}}
          </div>
          <div class="desc">
            {{t('t3')}}
          </div>
        </div>
        <div class="icon-list flex flex-vertical-center">
          <img src="@/assets/img/service/advantage/banner/icon-1.png" alt="" class="banner-icon" />
          <div class="split-line flex-shrink-0" />
          <img src="@/assets/img/service/advantage/banner/icon-2.png" alt="" class="banner-icon" />
          <div class="split-line flex-shrink-0" />
          <img src="@/assets/img/service/advantage/banner/icon-3.png" alt="" class="banner-icon" />
          <div class="split-line flex-shrink-0" />
          <img src="@/assets/img/service/advantage/banner/icon-4.png" alt="" class="banner-icon" />
          <div class="split-line flex-shrink-0" />
          <img src="@/assets/img/service/advantage/banner/icon-5.png" alt="" class="banner-icon" />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-left-radius: 70px;

  padding-top:50px;


  .banner-img {
    width: 300px;
    margin-right: 40px;
    transform: scale(1.2);
  }

  .right-wrap {
    gap: 30px;

    .desc {
      font-size: var(--desc-fz--default);
      line-height: 32px;
      color: #000;

    }

    .icon-list {
      justify-content: space-between;

      .banner-icon {
        width: 100px;
      }

      .split-line {
        width: 40px;
        height: 0;
        border-bottom: 1px dashed #3290f4;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Platform Fulfillment Node Advantages:",
    "t2": "Why choose JOZO? Because JOZO can provide efficient, convenient, and reliable dropshipping processes.",
    "t3": "With a powerful dropshipping platform, a wide range of product categories, customized branding, and reliable logistics partners, customers only need to make payment after confirming products and quotes."
  },
  "vn": {
    "t1": "Nền tảng thực hiện lợi thế nút:",
    "t2": "Tại sao chọn JOZO? Bởi vì JOZO có thể cung cấp quy trình thả hiệu quả, thuận tiện và đáng tin cậy.",
    "t3": "Với nền tảng vận chuyển thả mạnh mẽ, danh mục sản phẩm rộng, thương hiệu tùy chỉnh và đối tác hậu cần đáng tin cậy, khách hàng chỉ cần thanh toán sau khi xác nhận sản phẩm và báo giá."
  }
}
</i18n>
