<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

</script>

<template>
  <div class="banner-container ">
    <div class="content-wrap flex flex-horizontal-center flex-vertical-top">
      <img src="@/assets/img/contractus/banner/img-1.png" alt="" class="banner-img" />
      <div class="right-content-box">
        <BannerTitle class="banner-title" :title="t('t1')" />
        <div class="desc desc-1">
          {{t('t2')}}
        </div>
        <div class="desc-bolder">
          {{t('t3')}}
        </div>
        <div class="desc">
          {{t('t4')}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  padding-bottom: 51px;
  background: linear-gradient(to bottom, #ffffff, #bbd1ff);
  border-bottom-right-radius: 93px;
  padding-top: 75px;

  .banner-img {
    width: 500px;
    margin-right: 40px;
  }

  .right-content-box {

    .banner-title {
      margin-bottom: 30px;
    }

    .desc {
      font-size: var(--desc-fz--default);
      line-height: 36px;

      &.desc-1 {
        margin-bottom: 20px;
      }
    }

    .desc-bolder {
      font-size:var(--desc-fz--default);
      color: #0077f0;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "WHAT IS JOZODROP?",
    "t2": "Contact us to join Jozodrop's affiliate marketing program and grow together, sharing success!",
    "t3": "Introduction to Jozodrop Affiliate Marketing Program",
    "t4": "Jozodrop is committed to providing exceptional service and unparalleled product experiences to every user. Now, we go further by inviting you to join our affiliate marketing program, where your referrals not only help more people enjoy our services but also bring tangible profits to you!"
  },
  "vn": {
    "t1": "JOZODROP là gì?",
    "t2": "Liên hệ với chúng tôi để tham gia chương trình tiếp thị liên kết của Jozodrop và phát triển cùng nhau và chia sẻ thành công!",
    "t3": "Giới thiệu chương trình tiếp thị liên kết Jozodrop",
    "t4": "Jozodrop cam kết cung cấp dịch vụ vượt trội và trải nghiệm sản phẩm vô song cho mọi người dùng. Bây giờ chúng tôi mời bạn tham gia chương trình tiếp thị liên kết của chúng tôi và giới thiệu của bạn không chỉ giúp nhiều người hơn tận hưởng dịch vụ của chúng tôi mà còn mang lại lợi nhuận hữu hình cho bạn!"
  }
}
</i18n>
