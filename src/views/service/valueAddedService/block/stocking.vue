<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="stocking-container ">
    <div class="content-wrap" >
      <div class="service-container flex flex-horizontal-center flex-vertical-center">
        <div class="left-box">
          <BlockTitle :label="t('t1')"  color="#0077f0" class="block-title" />
          <div class="content-box flex">
            <img
              src="@/assets/img/service/valueAddedService/stocking/img-1.png"
              alt=""
              class="left-img"
            />
            <div class="desc-box flex flex-column flex-horizontal-between">
              <div class="desc">
                {{t('t2')}}
              </div>
              <div class="desc">
                {{t('t3')}}
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/img/service/valueAddedService/stocking/img-2.png"
          alt=""
          class="right-img"
        />
      </div>
    </div>

    <div class="publishing-container flex flex-column flex-vertical-center">
      <div class="content-wrap" >
        <BlockTitle
          :label="t('t4')"
          color="#0077f0"
          class="block-title"
          style="white-space: nowrap"
        />
        <div class="info-box flex">
          <div class="desc-column flex flex-column flex-horizontal-between">
            <div class="desc-1">
              {{t('t5')}}
            </div>
            <div class="desc-2-box">
              <div class="inner-box flex flex-vertical-center">
                <img
                  src="@/assets/img/service/valueAddedService/stocking/img-5.png"
                  alt=""
                  class="img-5"
                />
                <div class="desc-2">
                  {{t('t6')}}
                </div>
              </div>
            </div>
          </div>
          <img src="@/assets/img/service/valueAddedService/stocking/img-3.png" alt="" class="img-3" />
          <img src="@/assets/img/service/valueAddedService/stocking/img-4.png" alt="" class="img-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stocking-container {
  padding-top: 79px;
  padding-bottom: 54px;
  background: #ffffff;

  .service-container {
    gap: 31px;
    margin-bottom: 53px;

    .left-box {
      .block-title {
        margin-bottom: 57px;
      }

      .content-box {
        gap: 20px;

        .left-img {
          height: 168px;
        }

        .desc-box {
          font-size: var(--desc-fz--default);
          line-height: 24px;
          color: #000000;
        }
      }
    }

    .right-img {
      width: 240px;
      margin-top: 100px;
    }
  }

  .publishing-container {
    :deep(.block-title) {
      margin-bottom: 49px;
      align-self: flex-start;
    }

    .info-box {
      gap: 22px;

      .desc-column {
        width: 493px;

        .desc-1 {
          font-size: var(--desc-fz--default);
          line-height: 24px;
          color: #000000;
        }

        .desc-2-box {
          padding: 11px;
          padding-left: 0;
          position: relative;
          .inner-box {
            position: relative;
            z-index: 2;
            .img-5 {
              width: 89px;
              margin-right: 22px;
            }

            .desc-2 {
              font-size: var(--desc-fz--small);
              line-height: 24px;
              color: #000000;
            }
          }

          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100vw;
            height: 100%;
            background: #f1f7ff;
            right: 0;
            top: 0;
            z-index: 1;
          }
        }
      }
    }

    .img-3,
    .img-4 {
      height: 185px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "STOCKING SERVICE",
    "t2": "You can choose to stock up in our warehouse in advance due to the mismatch of holidays.",
    "t3": "Advantages: Enjoy free warehousing services, convenient order processing, fast shipping times, ensuring orders are processed and shipped accurately and on time, without affecting your experience due to stockouts.",
    "t4": "PUBLISHING JOZO PLATFORM PRODUCTS TO YOUR PLATFORM FOR SALE",
    "t5": "JOZO platform supports you in directly selecting our best-selling products to publish to your store.",
    "t6": "Advantages: Choose our best-selling products for direct sales, with certain sales popularity, without the need to organize corresponding product information yourself."
  },
  "vn": {
    "t1": "Dịch vụ đến",
    "t2": "Vì ngày lễ không phù hợp, bạn có thể chọn để chuẩn bị trước tại kho của chúng tôi.",
    "t3": "Ưu điểm: Thưởng thức dịch vụ lưu trữ miễn phí, xử lý đơn đặt hàng thuận tiện, thời gian vận chuyển nhanh, đảm bảo đơn đặt hàng được xử lý và vận chuyển chính xác và kịp thời, không ảnh hưởng đến trải nghiệm của bạn do hết hàng.",
    "t4": "Xuất bản sản phẩm nền tảng JOZO lên nền tảng của bạn để bán",
    "t5": "Nền tảng JOZO hỗ trợ bạn chọn trực tiếp các sản phẩm bán chạy nhất của chúng tôi để đăng lên cửa hàng của bạn.",
    "t6": "Ưu điểm: Chọn sản phẩm bán chạy nhất của chúng tôi để bán trực tiếp, với mức độ phổ biến bán hàng nhất định, không cần phải tự tổ chức thông tin sản phẩm tương ứng."
  }
}
</i18n>
