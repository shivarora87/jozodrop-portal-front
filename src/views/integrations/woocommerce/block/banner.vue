<script setup>
import Typed from 'typed.js'
import { onMounted, onUnmounted, ref,watch } from 'vue'
import {useI18nLang} from '@hooks'

const {t,langModel} = useI18nLang()

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
        <div>
          <img
            src="@/assets/img/integrations/woocommerce/banner/banner-logo-img.png"
            alt=""
            class="left-bottom-img"
          />
        </div>
      </div>
      <img
        src="@/assets/img/integrations/woocommerce/banner/banner-img.png"
        alt=""
        class="banner-img"
      />
    </div>

  </div>
</template>

<style scoped lang="scss">

.banner-container {
  background: linear-gradient(to bottom, #ffffff, #a0bfff);
  border-bottom-right-radius: 70px;
  height: 400px;

  .left-wrap {
    width: 800px;
    font-size: var(--desc-fz--default);
    line-height: 36px;
    color: #000;
    font-weight: bolder;

    .desc {
      color: #000;
      font-weight: inherit;
    }

    .left-bottom-img {
      margin-top: 30px;
      width: 430px;
    }
  }

  .banner-img {
    width: 400px;
    transform: scale(1.2);
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "WooCommerce is an open-sourced plugin for WordPress designed for online selling. This e-commerce platform is highly customizable and features many useful extensions."
  },
  "vn": {
    "t1": "WooCommerce là một plugin mã nguồn mở cho WordPress được thiết kế để bán trực tuyến. Nền tảng thương mại điện tử này có khả năng tùy biến cao và có nhiều tính năng mở rộng hữu ích."
  }
}
</i18n>
