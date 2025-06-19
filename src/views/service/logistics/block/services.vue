<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="services-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="step-wrap-1 flex flex-vertical-center">
        <img src="@/assets/img/service/logistics/service/car.png" alt="" class="car-img" />
        <div class="step-box flex flex-column">
          <div class="step-item flex">
            <div class="step-index flex flex-horizontal-center flex-vertical-center">1</div>
            <div class="step-desc">
              {{t('t2')}}
            </div>
          </div>
          <div class="step-item flex">
            <div class="step-index flex flex-horizontal-center flex-vertical-center">2</div>
            <div class="step-desc">
              {{t('t3')}}
            </div>
          </div>
        </div>
      </div>
      <div class="step-wrap-2 flex">
        <div class="step-column flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/logistics/service/img-1.png" alt="" class="step-img scale" />
          <div class="step-index flex flex-horizontal-center flex-vertical-center">3</div>
          <div class="step-desc">
            {{t('t4')}}
          </div>
        </div>
        <div class="step-column flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/logistics/service/img-2.png" alt="" class="step-img scale" />
          <div class="step-index flex flex-horizontal-center flex-vertical-center">4</div>
          <div class="step-desc">
            {{t('t5')}}
          </div>
        </div>
        <div class="step-column flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/logistics/service/img-3.png" alt="" class="step-img scale" />
          <div class="step-index flex flex-horizontal-center flex-vertical-center">5</div>
          <div class="step-desc">
            {{t('t6')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services-container {
  padding: 72px 0 36px;
  background: #f1f7ff;
  border-top-left-radius: 72px;

  .block-title {
    margin-bottom: 67px;
  }

  .step-index {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #0077f0;
    font-size: var(--desc-fz--large);
    font-weight: bolder;
    color: #ffffff;
    text-decoration: underline;
    @keyframes boxShadow {
      0% {
        box-shadow: 0 0 0 0 rgba(204, 225, 252, 1);
      }
      75% {
        box-shadow: 0 0 0 8px rgba(204, 225, 252, 0.6);
      }
      100% {
        box-shadow: 0 0 0 8px rgba(204, 225, 252, 0);
      }
    }
    animation: boxShadow 3s ease-in infinite;
  }

  .step-wrap-1 {
    margin-bottom: 45px;

    .car-img {
      width: 344px;
      margin-right: 15px;
    }

    .step-box {
      padding: 22px 11px 22px  18px;
      background: #ffffff;
      border-radius: 11px;
      gap: 26px;

      .step-index {
        margin-right: 14px;
        line-height: 1;
        flex-shrink: 0;
      }

      .step-desc {
        font-size:var(--desc-fz--default);
        line-height: 22px;
        color: #000000;
      }
    }
  }

  .step-wrap-2 {
    position: relative;
    justify-content: space-between;
    width: 100%;

    .step-column {
      width: 340px;
      position: relative;
      z-index: 2;

      .step-img {
        width: 100%;
        height: 192px;
        margin-bottom: 48px;
      }

      .step-index {
        margin-bottom: 30px;
      }

      .step-desc {
        width: 100%;
        padding: 32px;
        background: #ffffff;
        border-radius: 11px;
        font-size: var(--desc-fz--default);
      }
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 0;
      border-bottom: 1px dashed #0077f0;
      left: 0;
      z-index: 1;
      top: 262px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "LOGISTICS SERVICES",
    "t2": "JOZO collaborates with multiple logistics providers to offer you the most cost-effective prices and timely shipping options during the quotation process, reducing your costs.",
    "t3": "JOZO provides various shipping methods for customers to choose from, offering flexibility. Customers can choose the most suitable delivery method based on their needs and budget, catering to different requirements.",
    "t4": "JOZO has developed its own quotation tool covering multip le countries and various types of goods, enabling customer managers to quickly generate quotations.",
    "t5": "JOZO provides real-time tracking of orders and transparent logistics information processing, achieving automated order processing and real-time shipping to ensure orders are delivered to your customers accurately and on time. This allows you to track the delivery progress of orders at any time, providing a better and more reassuring shopping experience.",
    "t6": "The JOZO logistics team is highly knowledgeable about the characteristics of different shipping methods, extremely professional, and has excellent service attitude. They can promptly help solve logistics issues and provide good advice and solutions."
  },
  "vn": {
    "t1": "Dịch vụ Logistics",
    "t2": "JOZO làm việc với một số nhà cung cấp dịch vụ logistics để giảm chi phí của bạn bằng cách cung cấp cho bạn mức giá hiệu quả nhất và các tùy chọn vận chuyển kịp thời trong quá trình báo giá.",
    "t3": "JOZO cung cấp sự linh hoạt với nhiều phương thức vận chuyển cho khách hàng lựa chọn. Khách hàng có thể lựa chọn phương thức phân phối phù hợp nhất theo nhu cầu và ngân sách của mình, đáp ứng các yêu cầu khác nhau.",
    "t4": "JOZO đã phát triển công cụ báo giá của riêng mình, bao gồm nhiều quốc gia và các loại hàng hóa khác nhau, cho phép người quản lý tài khoản tạo báo giá nhanh chóng.",
    "t5": "JOZO cung cấp theo dõi đơn hàng theo thời gian thực và xử lý thông tin hậu cần minh bạch, cho phép xử lý đơn hàng tự động và vận chuyển theo thời gian thực để đảm bảo đơn hàng được giao chính xác và kịp thời cho khách hàng của bạn. Điều này cho phép bạn theo dõi tiến độ giao hàng của đơn đặt hàng bất cứ lúc nào, mang lại trải nghiệm mua sắm tốt hơn và yên tâm hơn.",
    "t6": "Đội ngũ hậu cần JOZO rất hiểu các đặc điểm của các phương thức vận chuyển khác nhau, rất chuyên nghiệp và thái độ phục vụ tuyệt vời. Họ có thể giúp giải quyết các vấn đề hậu cần kịp thời và đưa ra lời khuyên và giải pháp tốt."
  }
}
</i18n>
