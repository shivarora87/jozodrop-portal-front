<script setup>
import { inject } from 'vue'
import { symbolQuestionList } from '@/views/faq/hooks/useFetchData'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()

const questionList = inject(symbolQuestionList, [])
const onEnter = (el) => {
  el.style.transitionDelay = `${el.dataset.index * 0.15}s`
}
const onBeforeLeave = (el) => {
  el.style.transitionDelay = `0s`
}
</script>

<template>
  <div class="question-list-container">
    <div class="question-list-title-wrap flex flex-vertical-center">
      <img src="@/assets/img/faq/content/logo.png" alt="" class="logo-img" />
      <div class="question-title">
        {{ t('t1') }}
      </div>
    </div>
    <div class="question-list-wrap">
      <transition-group name="slide" @enter="onEnter" @before-leave="onBeforeLeave">
        <div
          v-for="(item, index) in questionList"
          :key="item.id"
          class="question-item flex flex-vertical-top"
          :data-index="index"
        >
          <div class="index-box">
            <img src="@/assets/img/faq/content/tag.png" alt="" class="index-icon-img" />
            <div class="index-label">{{ index + 1 }}</div>
          </div>
          <div class="content-box">
            <div class="content-title">{{ item.question }}</div>
            <div class="content">{{ item.answer }}</div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question-list-container {
  padding: 30px 0 70px;

  .question-list-title-wrap {
    padding: 14px 16px;
    background: #f4f8ff;

    .logo-img {
      width: 47px;
      margin-right: 18px;
    }

    .question-title {
      font-size: var(--desc-fz--default);
      font-weight: bolder;
      line-height: 24px;
    }
  }

  .question-list-wrap {
    padding-left: 13px;

    .slide-enter-from {
      opacity: 0;
      transform: translateX(57px);
    }

    .slide-enter-active {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .slide-leave-active {
      display: none;
    }

    .question-item {
      padding-top: 34px;
      padding-bottom: 14px;
      border-bottom: 1px solid #dedede;
      overflow: hidden;

      &:last-child {
        border-bottom: 1px solid transparent;
      }

      .index-box {
        position: relative;
        font-size: 0;
        margin-right: 7px;

        .index-icon-img {
          width: 33px;
        }

        .index-label {
          position: absolute;
          font-size: var(--desc-fz--default);
          color: #ffffff;
          font-weight: bolder;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-decoration: underline;
          line-height: 1;
          margin-top: -2px;
          text-underline-offset: 2px;
        }
      }

      .content-box {
        color: #000000;

        .content-title {
          font-size: var(--desc-fz--default);
          font-weight: bolder;
          margin-bottom: 22px;
        }

        .content {
          font-size: var(--desc-fz--small);
          line-height: 30px;
        }
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Welcome to JOZO, learn more about the basic information of the JOZO platform to make your dropshipping journey moreconvenien"
  },
  "vn": {
    "t1": "Chào mừng bạn đến với JOZO để tìm hiểu thêm về nền tảng JOZO và làm cho hành trình bán hàng trực tiếp của bạn thuận tiện hơn"
  }
}
</i18n>
