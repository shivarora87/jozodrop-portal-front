<script setup>
import { ref } from 'vue'
import BlockTitle from '@/views/common/block-title.vue'
import StepItem from '../components/step-item.vue'
import StepTitle from '../components/step-title.vue'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()

const stepList = ref([
  {
    icon: new URL('@/assets/img/service/advantage/process/icon-1.png', import.meta.url).href,
    title: 't1',
    content: 't2'
  },
  {
    icon: new URL('@/assets/img/service/advantage/process/icon-2.png', import.meta.url).href,
    title: 't3',
    content: 't4'
  },
  {
    icon: new URL('@/assets/img/service/advantage/process/icon-3.png', import.meta.url).href,
    title: 't5',
    content: 't6'
  },
  {
    icon: new URL('@/assets/img/service/advantage/process/icon-4.png', import.meta.url).href,
    title: 't7',
    content: 't8'
  }
])
</script>

<template>
  <div class="process-container">
    <div class="content-wrap  flex flex-column flex-vertical-center" >
      <BlockTitle :label="t('t9')" color="#0077f0" class="block-title" />
      <div class="sub-title">{{ t('t10') }}</div>
      <div class="step-wrap flex flex-vertical-center">
        <StepItem
          v-for="(stepItem, stepItemIndex) in stepList"
          :key="stepItemIndex"
          v-bind="stepItem"
          :stepIndex="stepItemIndex + 1"
          :t="t"
        />
      </div>
    </div>
    <div class="procurement-wrap">
      <div class="content-wrap flex flex-vertical-bottom" >
        <img src="@/assets/img/service/advantage/process/img-1.png" alt="" class="procurement-img" />
        <div class="right-content-box">
          <StepTitle
            iconName="icon-5"
            index="5"
            :title="t('t11')"
            :content="t('t12')"
            class="step-title flex-vertical-center"
          />
          <div class="img-list flex flex-vertical-center">
            <img
              src="@/assets/img/service/advantage/process/img-2.png"
              alt=""
              class="preview-img scale"
            />
            <img
              src="@/assets/img/service/advantage/process/img-3.png"
              alt=""
              class="preview-img scale"
            />
            <img
              src="@/assets/img/service/advantage/process/img-4.png"
              alt=""
              class="preview-img scale"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="warehouse-delivery-wrap">
      <div class="content-wrap">
        <div class="warehouse-box flex flex-horizontal-between">
          <StepTitle
            iconName="icon-6"
            index="6"
            :title="t('t13')"
            :content="t('t14')"
            class="step-title flex-vertical-top"
          />
          <img src="@/assets/img/service/advantage/process/img-6.png" alt="" class="warehouse-img" />
        </div>
        <div class="delivery-box flex flex-vertical-bottom">
          <img src="@/assets/img/service/advantage/process/img-5.png" alt="" class="delivery-img" />
          <StepTitle
            iconName="icon-7"
            index="7"
            :title="t('t15')"
            :content="t('t16')"
            class="step-title flex-vertical-top"
          />
        </div>
        <div class="after-sales-box flex flex-vertical-bottom">
          <StepTitle
            iconName="icon-8"
            index="8"
            :title="t('t17')"
            :content="t('t18')"
            class="step-title flex-vertical-top"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.process-container {
  padding: 76px 0 60px;
  background: #ffffff;

  .block-title {
    margin-bottom: 40px;
  }

  .sub-title {
    font-size: var(--desc-fz--large);
    color: #000000;
    margin-bottom: 60px;
  }

  .step-wrap {
    gap: 20px;
    margin-bottom: 50px;
  }

  .procurement-wrap {
    background: #f6f1ff;
    border-top-right-radius: 40px;
    padding: 36px 0 50px 160px;

    align-self: flex-start;
    margin-bottom: 46px;
    margin-right: 80px;

    .content-wrap {
      position: relative;
      left: -40px;
      gap: 30px;
    }

    .procurement-img {
      width: 430px;
    }

    .right-content-box {
      flex-grow: 1;

      :deep(.step-title) {
        margin-bottom: 10px;
      }

      .img-list {
        gap: 16px;
        justify-content: space-between;

        .preview-img {
          width: 200px;
        }
      }
    }
  }

  .warehouse-delivery-wrap {
    border-top-left-radius: 70px;
    padding-left: 120px;
    padding-top: 32px;
    position: relative;
    overflow: hidden;
    margin-left: 80px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 269px;
      left: 0;
      top: 0;
      background: #f6f1ff;
      z-index: 1;
    }
    .content-wrap {
      position: relative;
      left: -100px;
    }

    .warehouse-box {
      position: relative;
      z-index: 2;

      :deep(.step-title) {
        margin-right: 66px;

        .right-content {
          margin-top: 14px;
          width: 500px;
        }
      }

      .warehouse-img {
        margin-top: 14px;
        width: 400px;
      }
    }

    .delivery-box {
      position: relative;
      z-index: 2;
      margin-top: -113px;
      margin-bottom: 60px;

      .delivery-img {
        width: 430px;
        margin-right: 18px;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Bind Store",
    "t2": "You can connect your Shopify or WooCommerce store to JOZO.",
    "t3": "Sync Orders",
    "t4": "JOZO automatically syncs your orders to the platform for easy processing.",
    "t5": "Product Inquiry",
    "t6": "You can inquire about products through your orders, and also seek prices for products you want on our platform using links, images, etc.",
    "t7": "Place Order after  Selecting Logistics",
    "t8": "JOZO offers various shipping templates for you to choose from.",
    "t9": "PLATFORM FULFILLMENT PROCESS",
    "t10": "JOZO PROVIDES ANY PRODUCTS AND SERVICES YOU NEED.",
    "t11": "Procurement and Purchasing",
    "t12": "JOZO has a professional and reliable procurement team with rich purchasing experience,able to procure high-quality and cost-effective products.",
    "t13": "Warehouse Quality Inspection and Shipping",
    "t14": "JOZO's warehouse has safe and tidy storage space, and warehouse personnel have excellent sorting, distribution, and inventory management skills. They can package, process, etc.,products according to your needs.",
    "t15": "Delivery",
    "t16": "7-12 days express delivery ensures your customers enjoy fast, transparent transportation. Real-time logistics tracking prompts ensure accurate delivery to the destination.",
    "t17": "Reliable and Responsible After-Sales Service",
    "t18": "JOZO has a professional customer service team ready to answer questions and handle complaints for customers, providing you with timely and reliable after-sales service, including return and exchange policies and after-sales repairs."
  },
  "vn": {
    "t1": "Lưu trữ bị ràng buộc",
    "t2": "Bạn có thể kết nối cửa hàng Shopify hoặc WooCommerce của mình với JOZO.",
    "t3": "Đồng bộ hóa đơn đặt hàng",
    "t4": "JOZO sẽ tự động đồng bộ hóa đơn đặt hàng của bạn với nền tảng để xử lý dễ dàng hơn.",
    "t5": "Truy vấn sản phẩm",
    "t6": "Bạn có thể truy vấn sản phẩm theo đơn đặt hàng hoặc bạn có thể truy vấn giá của sản phẩm bạn muốn trên nền tảng của chúng tôi bằng cách sử dụng liên kết, hình ảnh, v.v.",
    "t7": "Đặt hàng sau khi chọn logistics",
    "t8": "JOZO cung cấp các mẫu vận chuyển khác nhau cho bạn lựa chọn.",
    "t9": "Quá trình hoàn thành nền tảng",
    "t10": "JOZO cung cấp bất kỳ sản phẩm và dịch vụ nào bạn cần.",
    "t11": "Mua sắm và mua sắm",
    "t12": "JOZO có đội ngũ tìm nguồn cung ứng chuyên nghiệp và đáng tin cậy với kinh nghiệm tìm nguồn cung ứng phong phú và có thể tìm nguồn cung ứng các sản phẩm có chất lượng cao, tỷ lệ giá cao",
    "t13": "Kiểm tra chất lượng kho và vận chuyển",
    "t14": "Kho của JOZO có không gian lưu trữ an toàn và gọn gàng, nhân viên kho có kỹ năng phân loại, phân phối và quản lý hàng tồn kho tuyệt vời. Họ có thể đóng gói, xử lý các sản phẩm như bạn muốn.",
    "t15": "Giao hàng tận nơi",
    "t16": "Chuyển phát nhanh 7-12 ngày đảm bảo khách hàng của bạn tận hưởng vận chuyển nhanh chóng và minh bạch. Mẹo theo dõi hậu cần theo thời gian thực đảm bảo giao hàng chính xác đến đích",
    "t17": "Dịch vụ hậu mãi đáng tin cậy và có trách nhiệm",
    "t18": "JOZO có đội ngũ dịch vụ khách hàng chuyên nghiệp để giải đáp thắc mắc của khách hàng bất cứ lúc nào, xử lý khiếu nại và cung cấp cho bạn dịch vụ hậu mãi kịp thời và đáng tin cậy, bao gồm chính sách hoàn trả và sửa chữa sau bán hàng."
  }
}
</i18n>
