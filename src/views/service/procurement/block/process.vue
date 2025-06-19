<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import StepCard from '../components/step-card.vue'
import CircleDot from '@/views/common/circle-dot.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="process-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="inner-wrap flex flex-column flex-horizontal-between">
        <div class="process-wrap-1 flex flex-vertical-center flex-horizontal-between">
          <div class="left-box">
            <StepCard
              index="1"
              :desc="t('t2')"
              class="step-card-1"
            />
            <StepCard
              index="2"
              :desc="t('t3')"
              class="step-card-2"
            />
            <div class="preview-img-box flex flex-horizontal-between">
              <img
                src="@/assets/img/service/procurement/process/left-img-1.png"
                alt=""
                class="preview-img scale"
              />
              <img
                src="@/assets/img/service/procurement/process/left-img-2.png"
                alt=""
                class="preview-img scale"
              />
            </div>
          </div>
          <img
            src="@/assets/img/service/procurement/process/right-img.png"
            alt=""
            class="right-img"
          />
        </div>
        <div class="process-wrap-2 flex flex-vertical-bottom">
          <div class="left-img-box">
            <img
              src="@/assets/img/service/procurement/process/left-bottom-img.png"
              alt=""
              class="left-img"
            />
            <CircleDot class="circle-dot circle-dot-3" />
            <CircleDot class="circle-dot circle-dot-4" />
          </div>
          <div class="right-box flex flex-column">
            <StepCard
              index="3"
              :desc="t('t4')"
            />
            <StepCard
              index="4"
              :desc="t('t5')"
            />
          </div>
        </div>
        <CircleDot class="circle-dot circle-dot-1" />
        <CircleDot class="circle-dot circle-dot-2" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.process-container {
  padding: 50px 0;
  background: #f1f7ff;

  .block-title {
    margin-bottom: 70px;
  }

  .inner-wrap {
    position: relative;

    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 1px;
      transform: scaleX(0.5);
      position: absolute;
      left: -40px;
      top: 0;
      background: #0077f0;
    }

    .process-wrap-1 {
      margin-bottom: 25px;

      .left-box {
        .step-card-1 {
          margin-bottom:20px;
        }

        .step-card-2 {
          margin-bottom: 30px;
        }

        .preview-img-box {
          .preview-img {
            border-radius: 6px;
            width: 320px;
          }
        }
      }

      .right-img {
        width: 350px;
        border-top-left-radius: 50px;
      }
    }

    .process-wrap-2 {
      .left-img-box {
        font-size: 0;
        margin-right: 58px;
        position: relative;

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          background: #0077f0;
        }

        &:before {
          width: calc(40px + 100% + 34px);
          height: 1px;
          transform: scaleY(50%);
          left: -40px;
          top: -43px;
        }

        &:after {
          width: 1px;
          height: calc(43px + 43px + 100%);
          transform: scaleX(50%);
          right: -34px;
          top: -86px;
        }

        .left-img {
          width: 360px;
        }
      }

      .right-box {
        gap: 18px;
      }
    }

    .circle-dot {
      position: absolute;

      &.circle-dot-1,
      &.circle-dot-2 {
        left: -40px;
        transform: translateX(-50%);
      }

      &.circle-dot-1 {
        top: 45px;
      }

      &.circle-dot-2 {
        top: 190px;
      }

      &.circle-dot-3 {
        right: -34px;
        top: -43px;
        transform: translate(50%, -50%);
      }
      &.circle-dot-4 {
        right: -34px;
        top: 82px;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "PROCUREMENT PROCESS",
    "t2": "Precise Product Confirmation: You only need to provide a link (Aliexpress, Alibaba, Amazon, etc.) or product image, and JOZO will accurately search for this product for you.",
    "t3": "Seeking Quality Suppliers: JOZO will select the most suitable supplier from the platform's existing suppliers. If the existing suppliers are not sufficient to meet the requirements, JOZO actively seeks new suppliers to address your needs.",
    "t4": "Product Quality Confirmation: With JOZO's procurement, you don't need to worry about quality issues. During the procurement process, JOZO pays close attention to the quality of the purchased products and inspects the quality inspection reports to ensure worry-free purchases for customers.",
    "t5": "Supplier Shipping: JOZO constantly monitors the purchased products and will ship them directly from our warehouse to customers. We handle order processing and logistics, so you don't need to worry about inventory management and order fulfillment."
  },
  "vn": {
    "t1": "Quy trình mua hàng",
    "t2": "Xác nhận sản phẩm chính xác: Bạn chỉ cần cung cấp liên kết (AliExpress, Alibaba, Amazon, v.v.) hoặc hình ảnh sản phẩm và JOZO sẽ tìm kiếm chính xác sản phẩm này cho bạn.",
    "t3": "Tìm nhà cung cấp chất lượng: JOZO sẽ chọn nhà cung cấp phù hợp nhất từ các nhà cung cấp hiện có của nền tảng. Nếu các nhà cung cấp hiện tại không đủ để đáp ứng các yêu cầu, JOZO sẽ chủ động tìm kiếm các nhà cung cấp mới để đáp ứng nhu cầu của bạn.",
    "t4": "Xác nhận chất lượng sản phẩm: Với việc mua hàng của JOZO, bạn không cần phải lo lắng về vấn đề chất lượng. Trong quá trình mua hàng, JOZO theo dõi chặt chẽ chất lượng của sản phẩm đã mua và kiểm tra báo cáo kiểm tra chất lượng để đảm bảo khách hàng mua hàng miễn phí.",
    "t5": "Vận chuyển của nhà cung cấp: JOZO liên tục theo dõi các sản phẩm đã mua và vận chuyển chúng trực tiếp từ kho của chúng tôi đến khách hàng. Chúng tôi xử lý đơn đặt hàng và hậu cần, vì vậy bạn không phải lo lắng về quản lý hàng tồn kho và thực hiện đơn đặt hàng."
  }
}
</i18n>
