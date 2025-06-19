<script setup>
import { ref } from 'vue'
import img1 from '@/assets/img/integrations/woocommerce/guide/img-1.png'
import img2 from '@/assets/img/integrations/woocommerce/guide/img-2.png'
import img3 from '@/assets/img/integrations/woocommerce/guide/img-3.png'
import img4 from '@/assets/img/integrations/woocommerce/guide/img-4.png'
import { Back } from '@element-plus/icons-vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

const imgList = ref([img1, img2, img3, img4])
</script>

<template>
  <div class="adapt-container">
    <div class="content-wrap">
      <div class="step-wrap flex flex-vertical-center flex-horizontal-center">
        <div class="left-box">
          <div class="img-box flex flex-horizontal-center flex-vertical-center">
            <img
              src="@/assets/img/integrations/woocommerce/guide/icon-1.png"
              alt=""
              class="icon-img"
            />
          </div>
          <div class="step-label">{{t('t1')}}</div>
        </div>
        <div class="right-box">
          <div class="step-label">{{t('t2')}}</div>
          <div class="img-box flex flex-horizontal-center flex-vertical-center">
            <img
              src="@/assets/img/integrations/woocommerce/guide/icon-2.png"
              alt=""
              class="icon-img"
            />
          </div>
        </div>
      </div>
      <div class="wordpress-wrap flex flex-horizontal-center flex-vertical-center">
        <img
          src="@/assets/img/integrations/woocommerce/guide/desc-img.png"
          alt=""
          class="wordpress-img"
        />
        <div class="label-box">
          <div class="label">
            {{t('t3')}}
          </div>
          <div class="label">
            {{t('t4')}}
          </div>
        </div>
      </div>
      <button class="congratulations-button-wrap flex flex-horizontal-center flex-vertical-center">
        <img
          src="@/assets/img/integrations/woocommerce/guide/button-icon.png"
          alt=""
          class="congratulations-icon"
        />
        <span class="congratulations-label">{{t('t5')}}</span>
      </button>
      <div class="img-wrap flex flex-horizontal-center flex-vertical-center">
        <img
          v-for="(img, index) in imgList"
          :key="index"
          :src="img"
          alt=""
          class="preview-img scale"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.adapt-container {
  padding: 63px 0;
  background: #ffffff;

  .step-wrap {
    margin-bottom:80px;
    justify-content: space-between;

    .left-box,
    .right-box {
      width: 500px;
      padding-top: 20px;
      padding-bottom: 20px;
      background: #fffcfa;
      position: relative;

      &.left-box {
        padding-left: 160px;
        padding-right: 30px;

        .img-box {
          left: 0;
        }
      }

      &.right-box {
        padding-right: 160px;
        padding-left: 30px;

        .img-box {
          right: 0;
        }
      }

      .img-box {
        width: 100px;
        height:100px;
        background: #fff1e9;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        .icon-img {
          width: 60px;
        }
      }

      .step-label {
        font-size: var(--desc-fz--default);
        color: #000000;
        line-height: 26px;
        position: relative;
        padding-bottom: 20px;
        font-weight: bolder;

        &:after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          border-radius: 2px;
          background: #ff9000;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }

  .wordpress-wrap {
    padding-bottom: 16px;
    gap: 34px;
    background: #fbfbfb;
    margin-bottom: 62px;

    .wordpress-img {
      width: 270px;
      margin-top: -14px;
    }

    .label-box {
      width: 800px;

      .label {
        font-size: var(--desc-fz--default);
        line-height: 26px;

        &:first-child {
          margin-bottom: 30px;
        }
      }
    }
  }

  .congratulations-button-wrap {
    width: 100%;
    height: 65px;
    gap: 18px;
    border: none;
    appearance: none;
    outline: none;
    background-image: linear-gradient(to right, #ff9307, #ffbe65, #ff9307);
    background-size: 200% 100%;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: rgba(97, 66, 151, 0.3) 1.14766px 1.14766px 4.59062px 0px;
    margin: 0 auto 70px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-position: 100% 0;
      box-shadow: rgba(97, 66, 151, 0.3) 1.19262px 1.19262px 4.68055px 0.0599493px;
    }

    .congratulations-icon {
      width: 50px;
    }

    .congratulations-label {
      font-size:var(--desc-fz--large);
      font-weight: bolder;
      color: #ffffff;
    }
  }

  .img-wrap {
    gap: 30px;
    justify-content: space-between;

    .preview-img {
      width: 240px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Go to the Store Management page and click \"WooCommerce\"",
    "t2": "Go back to your WordPress site. Copy your site URL and paste i",
    "t3": "In your WordPress dashboard, click WooCommerce on the sidebar and select Settings Go to the Advanced tab and click \"Rest API.\" Select the Add Key button. Fill in the description with \"JOZO\" and set permission to Read/Write. Click \"Generate API key\"",
    "t4": "Copy the WooCommerce Consumer Key and Consumer Secret and paste it on JOZO. Click \"Connectstore.\"",
    "t5": "Congratulations! You have now connected your WooCommerce store with JOZO"
  },
  "vn": {
    "t1": "Truy cập trang quản trị cửa hàng và nhấp vào \"WooCommerce\".",
    "t2": "Quay lại trang web WordPress của bạn. Sao chép URL trang web của bạn và dán i",
    "t3": "Trong bảng điều khiển WordPress của bạn, nhấp vào WooCommerce trên thanh bên, sau đó chọn Cài đặt để đi đến tab Nâng cao và nhấp vào Rest API. Chọn nút Thêm khóa. Điền vào mô tả với \"JOZO\" và thiết lập quyền để đọc/ghi. Click vào \"Generate API Key\"",
    "t4": "Sao chép khóa người tiêu dùng WooCommerce và bí mật người tiêu dùng và dán chúng vào JOZO. Click vào \"Connect Store\"",
    "t5": "Chúc mừng! Bây giờ bạn đã kết nối cửa hàng WooCommerce với JOZO"
  }
}
</i18n>
