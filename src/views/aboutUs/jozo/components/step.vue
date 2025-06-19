<script setup>
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="step-wrap" id="step-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <div class="title">
        {{ t('t1') }}
      </div>
      <div class="step-list-box flex flex-horizontal-center flex-vertical-top list-1">
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-5.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">1</div>
          </div>
          <div class="desc">{{ t('t2') }}</div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-12.png" alt="" class="arrow-img" />
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-6.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">2</div>
          </div>
          <div class="desc">{{ t('t3') }}</div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-12.png" alt="" class="arrow-img" />
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-7.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">3</div>
          </div>
          <div class="desc">{{ t('t4') }}</div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-12.png" alt="" class="arrow-img" />
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-8.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">4</div>
          </div>
          <div class="desc">{{ t('t5') }}</div>
        </div>
      </div>
      <div class="step-list-box flex flex-horizontal-center flex-vertical-top list-2">
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-9.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">5</div>
          </div>
          <div class="desc">{{ t('t6') }}</div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-12.png" alt="" class="arrow-img" />
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-10.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">6</div>
          </div>
          <div class="desc">{{ t('t7') }}</div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-12.png" alt="" class="arrow-img" />
        <div class="step-item-box flex flex-column flex-vertical-center">
          <div class="top-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/work/img-11.png" alt="" class="step-img" />
            <div class="step-index flex flex-horizontal-center flex-vertical-center">7</div>
          </div>
          <div class="desc">{{ t('t8') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-wrap {
  .title {
    font-size: var(--block-title-fz);
    color: #000000;
    font-weight: bolder;
    margin-bottom: 80px;
  }

  .step-list-box {
    width: 100%;

    .step-item-box {
      gap: 62px;
      width: calc((100% - 120px) / 4);

      .top-box {
        width: 100%;
        height: 328px;
        background: #f6f6f6;
        border-radius: 34px;
        border-top-left-radius: 0;
        position: relative;

        .step-img {
          width: 170px;
        }

        .step-index {
          position: absolute;
          width: 60px;
          height: 60px;
          background: #0077f0;
          font-size: var(--desc-fz--large);
          color: #ffffff;
          font-weight: bolder;
          text-decoration: underline;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }
      }

      .desc {
        font-size: var(--desc-fz--default);
        color: #000000;
        line-height: 36px;
        width: 100%;
        text-align: center;
      }
    }

    .arrow-img {
      width: 40px;
      transform: translateY(328px);
    }

    &.list-1 {
      margin-bottom: 87px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "How to make Jozodrop work for you？",
    "t2": "Seller signs agreement with Jozodrop",
    "t3": "Customer orders online",
    "t4": "Seller receives order",
    "t5": "Customer receives an order confirmation",
    "t6": "Seller forwards the order to Jozodrop",
    "t7": "Jozodrop ships the order",
    "t8": "Customer receives the product"
  },
  "vn": {
    "t1": "Làm thế nào để làm cho Jozodrop làm việc cho bạn",
    "t2": "Người bán ký thỏa thuận với Jozodrop",
    "t3": "Đặt hàng trực tuyến của khách hàng",
    "t4": "Người bán nhận lệnh",
    "t5": "Khách hàng nhận được xác nhận đặt hàng",
    "t6": "Người bán chuyển tiếp đơn đặt hàng đến Jozodrop",
    "t7": "Jozodrop đơn hàng vận chuyển",
    "t8": "Khách hàng nhận sản phẩm"
  }
}
</i18n>
