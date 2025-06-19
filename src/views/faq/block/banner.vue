<script setup>
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container">
    <div class="content-wrap  flex flex-horizontal-center">
      <div class="right-wrap flex flex-column">
        <div class="desc-box">
          <div class="desc">
            {{t('t1')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-left-radius: 70px;
  gap: 22px;
  padding-top: 57px;
  padding-bottom: 57px;

  .right-wrap {
    .banner-title {
      color: #0077f0;
      font-size:var(--desc-fz--default);
      font-weight: bolder;
      position: relative;
      text-decoration: underline #0077f0;
      text-underline-offset: 3px;
      gap: 14px;

      &:before {
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 4px;
        background: #0077f0;
        box-shadow: -5px -5px 0 0 #76b5f7;
        transform: translateY(3px);
      }
    }

    .desc {
      font-size:var(--desc-fz--default);
      line-height: 27px;
      font-weight: bolder;
      color: #000;
    }

  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Considering that you may encounter some questions while using the JOZO platform, we have compiled a list of common questions and provided answers for each section of the JOZO platform. This is aimed at enhancing your platform experience and facilitating your exploration of the JOZO platform on your own. However, if you cannot find the solution to your question, please feel free to contact your account manager for assistance."
  },
  "vn": {
    "t1": "Xem xét một số câu hỏi bạn có thể gặp phải khi sử dụng nền tảng JOZO, chúng tôi đã biên soạn một danh sách các câu hỏi thường gặp và cung cấp câu trả lời cho từng phần của nền tảng JOZO. Điều này được thiết kế để nâng cao trải nghiệm nền tảng của bạn và thúc đẩy khám phá của riêng bạn về nền tảng JOZO. Tuy nhiên, nếu bạn không thể tìm ra giải pháp cho vấn đề của mình, hãy liên hệ với người quản lý tài khoản của bạn để được giúp đỡ."
  }
}
</i18n>
