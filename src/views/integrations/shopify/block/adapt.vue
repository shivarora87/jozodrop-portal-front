<script setup>
import { ref } from 'vue'
import BlockTitle from '@/views/common/block-title.vue'
import icon1 from '@/assets/img/integrations/shopify/adapt/icon-1.png'
import icon2 from '@/assets/img/integrations/shopify/adapt/icon-2.png'
import icon3 from '@/assets/img/integrations/shopify/adapt/icon-3.png'
import icon4 from '@/assets/img/integrations/shopify/adapt/icon-4.png'
import iconArrow from '@/assets/img/integrations/shopify/adapt/icon-arrow.png'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()

const stepList = ref([
  't1',
  't2',
  't3',
  't4'
])
const iconList = ref([icon1, iconArrow, icon2, iconArrow, icon3, iconArrow, icon4])
</script>

<template>
  <div class="adapt-container">
    <div class="content-wrap" >
      <div class="step-wrap flex flex-horizontal-center flex-vertical-center">
        <img src="@/assets/img/integrations/shopify/adapt/adapt.png" alt="" class="adapt-img" />
        <div class="right-box">
          <BlockTitle :label="t('t5')" color="#ff9000"  style="white-space: nowrap"/>
          <div class="step-box flex flex-column">
            <div
              v-for="(stepText, index) in stepList"
              :key="index"
              class="step-item flex flex-vertical-center"
            >
              <div class="step-index flex flex-horizontal-center flex-vertical-center">
                {{ index + 1 }}
              </div>
              <div class="step-label">{{ t(stepText) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="icon-wrap flex flex-horizontal-center flex-vertical-center">
        <div v-for="(iconImg, index) in iconList" :key="index" class="icon-item">
          <div class="icon-inner flex flex-horizontal-center flex-vertical-center">
            <img :src="iconImg" alt="" class="icon-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.adapt-container {
  padding: 55px 65px;
  background: #ffffff;

  .step-wrap {
    margin-bottom: 63px;

    .adapt-img {
      width: 360px;
      transform: scale(1.2);
    }

    .right-box {
      margin-left: 70px;

      .step-box {
        margin-top: 60px;
        gap: 30px;

        .step-item {
          @keyframes morph {
            0% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }

            50% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }

            100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
          }

          .step-index {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: #ff9000;
            font-size: var(--desc-fz--default);
            color: #ffffff;
            text-decoration: underline #ffffff;
            box-shadow: rgb(255, 199, 127) -1.72148px -4.0168px 0px 4.0168px;
            animation: morph 3s ease-in-out infinite reverse;
          }

          .step-label {
            margin-left: 20px;
            font-size: var(--desc-fz--default);
            color: #000000;
          }
        }
      }
    }
  }

  .icon-wrap {
    justify-content: space-between;

    .icon-item {
      .icon-img {
        width: 34px;
        box-sizing: content-box;
      }

      &:nth-child(2n + 1) {
        width: 180px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fbfbfb;
        border-top-right-radius:28px;

        .icon-inner {
          width: 88px;
          height: 88px;
          background: #ffffff;
          border-radius: 50%;

          .icon-img {
            width: 34px;
          }
        }
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Go to the Store Management page and click \"Shopify\"",
    "t2": "Enter JOZO APP download page and click Log in to install",
    "t3": "Select your Shopify store and sign in",
    "t4": "Congratulations! You successfully connected your Shopify store with JOZO",
    "t5": "ADAPT NOW AND ENJOY THE BEST SERVICE!"
  },
  "vn": {
    "t1": "Đi đến trang Quản lý cửa hàng và nhấp vào \"Shopify\".",
    "t2": "Truy cập trang tải xuống ứng dụng JOZO và nhấp vào Đăng nhập để cài đặt",
    "t3": "Chọn cửa hàng Shopify của bạn và đăng nhập",
    "t4": "Chúc mừng! Bạn đã kết nối thành công Shopify Store với JOZO",
    "t5": "Thích nghi ngay bây giờ và tận hưởng dịch vụ tốt nhất!"
  }
}
</i18n>

