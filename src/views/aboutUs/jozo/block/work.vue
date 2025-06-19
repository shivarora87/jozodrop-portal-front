<script setup>
import Step from '../components/step.vue'

import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="work-container ">
    <div class="content-wrap flex flex-column flex-vertical-center">
      <div class="how-work-wrap flex flex-vertical-bottom">
        <div class="left-desc-box">
          <div class="title flex flex-horizontal-center flex-vertical-center">
            {{t('t1')}}
          </div>
          <div class="desc">
            {{t('t2')}}
          </div>
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-2.png" alt="" class="how-work-img" />
        <img src="@/assets/img/aboutUs/jozo/work/img-3.png" alt="" class="how-work-img" />
      </div>
      <div class="desc-wrap flex flex-vertical-center">
        <img src="@/assets/img/aboutUs/jozo/work/logo.png" alt="" class="logo-img" />
        <div class="desc">
          {{t('t3')}}
        </div>
        <img src="@/assets/img/aboutUs/jozo/work/img-4.png" alt="" class="img-1" />
      </div>
    </div>
    <Step/>
  </div>
</template>

<style scoped lang="scss">
.work-container {
  padding: 53px 0 51px;

  .how-work-wrap {
    gap: 22px;
    margin-bottom: 65px;

    .left-desc-box {
      width: 380px;

      .title {
        height: 61px;
        font-size: var(--desc-fz--default);
        font-weight: bolder;
        color: #0077f0;
        position: relative;
        background: #f1f7ff;
        border-radius: 11px;
        box-shadow: 2px 5px 0 0 #c4e0fc;
        text-decoration: underline;
        margin-bottom: 22px;

        &:before,
        &:after {
          content: '';
          display: block;
          width: 16px;
          height: 16px;
          background: url('@/assets/img/aboutUs/jozo/work/img-1.png') center center / 100% 100%
            no-repeat;
          position: absolute;
        }

        &:before {
          left: 13px;
          top: 13px;
        }

        &:after {
          right: 11px;
          bottom: 11px;
        }
      }

      .desc {
        font-size: var(--desc-fz--small);
        color: #000000;
        line-height: 24px;
      }
    }

    .how-work-img {
      width: 344px;
    }
  }

  .desc-wrap {
    padding: 19px 192px 19px 30px;
    background: #f1f7ff;
    border-radius: 11px;
    position: relative;
    margin-bottom: 61px;

    .logo-img {
      width: 80px;
      margin-right: 34px;
    }

    .desc {
      font-size: var(--desc-fz--small);
      line-height: 24px;
      color: #000000;
      width: 775px;
      margin-right: 52px;
    }

    .img-1 {
      width: 122px;
      position: absolute;
      right: 19px;
      top: -25px;
    }
  }

}
</style>

<i18n>
  {
    "en": {
      "t1": "HOW DOES JOZODROP WORK?",
      "t2": "In the process of using JOZODROP, you promote your products through online stores such as
          Shopify, WooCommerce, etc. When customers place orders, you send the orders to JOZODROP
          and notify the customers that the products are on their way.",
      "t3": "The rest of the fulfillment process is no longer under your control, JOZODROP will handle
        everything for you. In the JOZODROP dropshipping agreement, you are also responsible for
        handling customer service, while JOZODROP manages physical goods and fulfillment.",
    },
    "vn": {
      "t1": "JOZODROP hoạt động như thế nào?",
      "t2": "Trong quá trình sử dụng JOZODROP, bạn quảng bá sản phẩm của mình thông qua cửa hàng trực tuyến, ví dụ:
Shopify, WooCommerce, v.v... Khi khách hàng đặt hàng, bạn gửi đơn đặt hàng đến JOZODROP
Và thông báo cho khách hàng rằng sản phẩm đang trên đường vận chuyển.",
      "t3": "Phần còn lại của quá trình thực hiện không còn dưới sự kiểm soát của bạn, JOZODROP sẽ xử lý
Tất cả vì anh. Trong thỏa thuận thả JOZODROP, bạn cũng chịu trách nhiệm
Xử lý dịch vụ khách hàng trong khi JOZODROP quản lý vật lý và thực hiện.",
    }
  }
  </i18n>
