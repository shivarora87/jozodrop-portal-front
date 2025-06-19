<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="vision-container">
    <div class="content-wrap flex flex-horizontal-end flex-vertical-center">
      <img src="@/assets/img/home/vision/vision-1-left.jpg" alt="" class="left-img" />
      <div class="right-content-box">
        <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
        <div class="content-label first">
          {{t('t2')}}
        </div>
        <div class="content-label">
          {{t('t3')}}
        </div>
      </div>
      <!--<img src="@/assets/img/home/vision/vision-1-right.png" alt="" class="right-img" />-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.vision-container {
  background: #f1f7ff;
  padding:97px 0 ;
  margin-bottom: 126px;
  border-top-right-radius:100px;
  .content-wrap{
    position: relative;
    justify-content: space-between;
    .left-img {
      width: 500px;
      border-radius: 13px;
      margin-right: 30px;
    }

    .right-img {
      width: 300px;
      transform: scale(1.2);
    }

    &:after {
      content: '';
      position: absolute;
      width: 16px;
      height:  16px;
      background: url('@/assets/img/home/common/plus.png');
      background-size: 100% 100%;
      left: 73px;
      top: 0;
    }

    .right-content-box {
      width: 500px;
      padding-right: 45px;
      margin-top: -60px;

      .block-title {
        margin-bottom: 50px;
      }

      .content-label {
        font-size: var(--desc-fz--default);
        color: #000000;
        line-height: 40px;

        &.first {
          margin-bottom:20px;
        }
      }
    }

  }
}
</style>

<i18n>
{
  "en": {
    "t1": "VISION",
    "t2": "\"To become the most trusted fulfillment provider in the European and American regions.",
    "t3": "Through quality, innovation, and personalized service, we lead industry progress andenable countless entrepreneurs to achieve their dreams.\"",
    "t4": "SLOGAN",
    "t5": "Dream, Ship, Succeed with Jozodrop"
  },
  "vn": {
    "t1": "Tầm nhìn",
    "t2": "\"Trở thành nhà cung cấp dịch vụ hậu cần đáng tin cậy nhất khu vực Âu Mỹ.",
    "t3": "Thông qua chất lượng, đổi mới và dịch vụ cá nhân, chúng tôi dẫn đầu ngành công nghiệp tiến bộ và cho phép vô số doanh nhân đạt được ước mơ của họ.\"",
    "t4": "Trang chủ",
    "t5": "Giấc mơ, thuyền, thành công với Jozodrop"
  }
}
</i18n>
