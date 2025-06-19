<script setup>
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
const handlerSignUp = () => window.open('https://xxx.com', '_blank')
</script>

<template>
  <div class="sign-up-wrap ">
    <div class="content-wrap flex flex-column flex-vertical-center flex-horizontal-center">
      <div class="title">{{ t('t1') }}</div>
      <div class="desc">{{ t('t2') }}</div>
      <button class="sign-up-button" @click="handlerSignUp">{{ t('t3') }}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sign-up-wrap {
  color: #ffffff;
  height: 181px;
  background: url('@/assets/img/home/signup/bg.png') center center / 100% 100% no-repeat #036cd7;
  line-height: 1;

  .content-wrap {
    gap: 21px;
    height: 100%;

    .title {
      font-size: var(--desc-fz--default);
    }

    .desc {
      font-size: var(--desc-fz--default);
    }

    .sign-up-button {
      width: 137px;
      height: 38px;
      appearance: none;
      outline: none;
      background: #ffffff;
      font-size: var(--desc-fz--small);
      color: #0072e6;
      border-radius:5px;
      border: none;
      cursor: pointer;
      @keyframes gelatine {
        0%,
        100% {
          transform: scale(1, 1);
        }
        25% {
          transform: scale(0.9, 1.1);
        }
        50% {
          transform: scale(1.1, 0.9);
        }
        75% {
          transform: scale(0.95, 1.05);
        }
      }

      &:hover,
      &:focus,
      &:active,
      &:visited {
        transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
        animation: gelatine 0.5s 1;
      }
    }
  }
}


</style>

<i18n>
{
  "en": {
    "t1": "Are you ready to start your JOZO journey?",
    "t2": "it only takes a few minutes",
    "t3": "Sign up for free"
  },
  "vn": {
    "t1": "Bạn đã sẵn sàng để bắt đầu hành trình JOZO của mình chưa?",
    "t2": "Chỉ mất vài phút thôi.",
    "t3": "Đăng ký miễn phí"
  }
}
</i18n>
