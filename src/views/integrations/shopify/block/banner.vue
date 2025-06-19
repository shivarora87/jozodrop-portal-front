<script setup>
import Typed from 'typed.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18nLang } from '@hooks'

const { t, langModel } = useI18nLang()

let typedInstance

const $content = ref()

const initTyped = () => {
  typedInstance = new Typed($content.value, {
    strings: [
      t('t1')
    ],
    typeSpeed: 20,
    backSpeed: 0,
    backDelay: 5000,
    loop: true
  })
}

onMounted(() => {
  initTyped()
  watch(langModel, () => {
    typedInstance && typedInstance.destroy()
    initTyped()
  })

  onUnmounted(() => {
    typedInstance && typedInstance.destroy()
  })
})
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-vertical-center ">
      <div class="left-wrap">
        <span ref="$content" class="desc"></span>
        <button class="signup-button flex flex-horizontal-center flex-vertical-center">
          {{ t('t2') }}
        </button>
      </div>
      <img src="@/assets/img/integrations/shopify/banner/banner-img.png" alt="" class="banner-img" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #a0bfff);
  border-bottom-right-radius: 70px;
  height: 400px;
  .content-wrap{
    justify-content: space-between;
    .left-wrap {
      width: 800px;
      font-size: var(--desc-fz--default);
      line-height: 36px;
      color: #000;
      font-weight: bolder;

      .desc {
        font-weight: inherit;
        white-space: pre-wrap;
      }

      .signup-button {
        width: 330px;
        height: 60px;
        font-size: var(--desc-fz--default);
        color: #ffffff;
        border: none;
        appearance: none;
        outline: none;
        background-image: linear-gradient(to right, #0077f0, #009bf0, #0077f0);
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
        box-shadow: rgba(97, 66, 151, 0.3) 1.14766px 1.14766px 4.59062px 0;
        background-size: 200% 100%;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-position: 100% 0;
          box-shadow: rgba(97, 66, 151, 0.3) 3.44297px 3.44297px 9.18125px 3.06042px;
        }
      }
    }

    .banner-img {
      width: 400px;
      transform: scale(1.2);
    }
  }


}
</style>

<i18n>
{
  "en": {
    "t1": "Shopify is an e-commerce platform that allows anyone to setup their store and sell products.^1000 This subscription-basedsoftware is one of the most accessible platforms for startingmerchants and dropshippers.",
    "t2": "SIGN UP FOR FREE"
  },
  "vn": {
    "t1": "Shopify là một nền tảng thương mại điện tử cho phép bất cứ ai mở cửa hàng và bán sản phẩm. 1000 Phần mềm dựa trên đăng ký này là một trong những nền tảng dễ tiếp cận nhất cho các nhà khởi nghiệp và nhà bán hàng trực tiếp.",
    "t2": "Đăng ký miễn phí"
  }
}
</i18n>
