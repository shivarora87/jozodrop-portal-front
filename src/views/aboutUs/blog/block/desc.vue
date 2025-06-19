<script setup>
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="desc-container">
    <div class="content-wrap  flex flex-horizontal-center flex-vertical-center">
      <img src="@/assets/img/aboutUs/blog/list/img-1.png" alt="" class="img-1" />
      <div class="desc">
        {{t('t1')}}
      </div>
      <img src="@/assets/img/aboutUs/blog/list/img-2.png" alt="" class="img-2" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.desc-container {
  padding-top: 30px;
  padding-bottom: 11px;
  background: #ffffff;

  .img-1 {
    width: 128px;
    margin-right: 48px;
  }

  .desc {
    width: 618px;
    margin-right: 48px;
    font-size: var(--desc-fz--default);
    line-height: 24px;
    color: #000000;
  }

  .img-2 {
    width: 218px;
    margin-right: 93px;
  }
}
</style>

<i18n>
  {
    "en": {
      "t1": "Just choose your interests and hobbies.It's good for your start.And we will also recommend
      good products each week. You may also view our website. Hope my choice can help your business.",
    },
    "vn": {
      "t1": "Chỉ cần chọn sở thích và sở thích của bạn. Tốt cho sự khởi đầu của bạn. Chúng tôi cũng sẽ đề nghị
      Sản phẩm tốt mỗi tuần Bạn cũng có thể duyệt trang web của chúng tôi. Hy vọng sự lựa chọn của tôi sẽ giúp ích cho doanh nghiệp của bạn.",
    }
  }
  </i18n>
