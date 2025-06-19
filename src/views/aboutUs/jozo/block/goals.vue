<script setup>
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="goals-container ">
    <div class="content-wrap flex flex-column flex-horizontal-center flex-vertical-center">
      <div class="title">{{ t('t1') }}</div>
      <div class="sub-title">
        {{ t('t2') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goals-container {
  height: 144px;
  background: url('@/assets/img/aboutUs/jozo/goals/img-1.png') center center / 1462px 100% no-repeat #0671df;
  color: #ffffff;

  .content-wrap {
    height: 100%;

    .title {
      font-size: var(--desc-fz--large);
      font-weight: bolder;
      text-decoration: underline;
      text-underline-offset: 2px;
      margin-bottom: 18px;
    }

    .sub-title {
      width: 697px;
      font-size: var(--desc-fz--small);
      line-height: 24px;
      text-align: center;
    }
  }

}
</style>

<i18n>
{
  "en": {
    "t1": "OUR GOALS",
    "t2": "In the next three years, it will focus on business expansion in the European and American
    markets
    and
    help
    independent
    website
    entrepreneurs
    jointly
    build
    1,
    000
    top-level
    brand
    stores.
    "
  },
  "vn": {
    "t1": "Mục tiêu của chúng tôi",
    "t2": "Trong ba năm tới, nó sẽ tập trung vào việc mở rộng kinh doanh ở châu Âu và Mỹ.
    Thị
    trường,
    giúp
    người
    sáng
    lập
    website
    độc
    lập
    cùng
    xây
    dựng
    1000
    cửa
    hàng
    thương
    hiệu
    cao
    cấp.
    "
  }
}
</i18n>
