<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="product-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <div class="row flex flex-column flex-vertical-center">
        <div class="content-wrap flex flex-horizontal-between">
          <img
            src="@/assets/img/service/valueAddedService/product/img-1.png"
            alt=""
            class="row-img"
          />
          <div class="content-box">
            <BlockTitle
              :label="t('t1')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc">
              <div>
                {{ t('t1') }}
              </div>
              <div>
                {{ t('t2') }}
              </div>
            </div>
          </div>
        </div>
        <div class="line-box line-box-1"></div>
        <div class="line-box line-box-2"></div>
      </div>
      <div class="row flex flex-column flex-vertical-center">
        <div class="content-wrap flex flex-horizontal-between">
          <div class="content-box">
            <BlockTitle
              :label="t('t4')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc">
              <div>
                {{ t('t5') }}
              </div>
              <div>
                {{ t('t6') }}
              </div>
            </div>
          </div>
          <img
            src="@/assets/img/service/valueAddedService/product/img-2.png"
            alt=""
            class="row-img"
          />
        </div>
        <div class="line-box line-box-1"></div>
        <div class="line-box line-box-2"></div>
      </div>
      <div class="row flex flex-column flex-vertical-center">
        <div class="content-wrap flex flex-horizontal-between">
          <img
            src="@/assets/img/service/valueAddedService/product/img-3.png"
            alt=""
            class="row-img"
          />
          <div class="content-box">
            <BlockTitle
              :label="t('t7')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc">
              <div>
                {{ t('t8') }}
              </div>
              <div>
                {{ t('t9') }}
              </div>
            </div>
          </div>
        </div>
        <div class="line-box line-box-1"></div>
        <div class="line-box line-box-2"></div>
      </div>
      <div class="row flex flex-column flex-vertical-center">
        <div class="content-wrap flex flex-horizontal-between">
          <div class="content-box">
            <BlockTitle
              :label="t('t10')"
              color="#0077f0"
              class="block-title"
            />
            <div class="desc">
              <div>{{ t('t11') }}</div>
              <div>
                {{ t('t12') }}
              </div>
            </div>
          </div>
          <img
            src="@/assets/img/service/valueAddedService/product/img-4.png"
            alt=""
            class="row-img"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.product-container {
  padding: 86px 0 53px;
  background: #f1f7ff;
  border-top-right-radius: 71px;

  .row {
    width: 100%;

    .content-wrap {
      width: 100%;

      .row-img {
        width: 354px;
      }

      .content-box {
        width: 728px;

        :deep(.block-title) {
          margin-bottom: 62px;

          span {
            font-size: 24px;
          }
        }

        .desc {
          font-size: var(--desc-fz--default);
          line-height:24px;
          color: #000000;
        }
      }
    }

    .line-box {
      position: relative;
      width: 758px;
      height: 41px;

      &:before,
      &.line-box-1:after {
        content: '';
        display: block;
        position: absolute;
        background: #0077f0;
      }

      &:before {
        top: 0;
        height: 100%;
        width: 1px;
        transform: scaleX(0.5);
      }

      &.line-box-1:after {
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        left: 0;
        bottom: 0;
      }
    }
  }

  .row:nth-child(2n + 1) {
    .line-box-1 {
      &:before {
        left: 0;
      }
    }

    .line-box-2 {
      &:before {
        right: 0;
      }
    }
  }

  .row:nth-child(2n) {
    .line-box-1 {
      &:before {
        right: 0;
      }
    }

    .line-box-2 {
      &:before {
        left: 0;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "PRODUCT PHOTOGRAPHY SERVICE",
    "t2": "We have a professional photography team that can shoot photos or videos of your products according to your requirements.",
    "t3": "Advantages: You can confirm the quality and packaging of the shipped products before shipment.",
    "t4": "PCREATING HANDMADE STORES FOR ORDER PROCESSING",
    "t5": "You can add your handmade store to our store management, and then process handmade orders.",
    "t6": "Advantages: Distinguish your Shopify and other stores from regular stores, making it easier for you to process orders that do not need to appear in your store, such as sending samples to customers.",
    "t7": "MARKETING SUPPORT AND TOOLS",
    "t8": "We have a professional photography team that can shoot photos or videos of your products according to your requirements.",
    "t9": "Advantages: You can confirm the quality and packaging of the shipped products before shipment.",
    "t10": "TECHNICAL SUPPORT AND TRAINING",
    "t11": "JOZO provides platform training resources and technical support.",
    "t12": "Advantages: JOZO's account managers help customers understand platform usage and optimize business processes; JOZO's technical team performs regular maintenance and updates, ensuring stable platform operation and introducing new modules that are easy to use, providing a better and more efficient user experience."
  },
  "vn": {
    "t1": "Dịch vụ chụp ảnh sản phẩm",
    "t2": "Chúng tôi có đội ngũ nhiếp ảnh chuyên nghiệp có thể chụp ảnh hoặc quay video sản phẩm của bạn theo yêu cầu của bạn.",
    "t3": "Ưu điểm: Bạn có thể xác nhận chất lượng và đóng gói của sản phẩm vận chuyển trước khi giao hàng.",
    "t4": "Tạo cửa hàng handmade để xử lý đơn hàng",
    "t5": "Bạn có thể thêm cửa hàng thủ công của bạn vào quản lý cửa hàng của chúng tôi và sau đó xử lý các đơn đặt hàng thủ công.",
    "t6": "Ưu điểm: Phân biệt Shopify và các cửa hàng khác với các cửa hàng thông thường giúp bạn dễ dàng xử lý các đơn đặt hàng không cần phải xuất hiện trong cửa hàng, chẳng hạn như gửi mẫu cho khách hàng.",
    "t7": "Hỗ trợ&Công cụ Marketing",
    "t8": "Chúng tôi có đội ngũ nhiếp ảnh chuyên nghiệp có thể chụp ảnh hoặc quay video sản phẩm của bạn theo yêu cầu của bạn.",
    "t9": "Ưu điểm: Bạn có thể xác nhận chất lượng và đóng gói của sản phẩm vận chuyển trước khi giao hàng.",
    "t10": "Hỗ trợ kỹ thuật và đào tạo",
    "t11": "JOZO cung cấp tài nguyên đào tạo nền tảng và hỗ trợ kỹ thuật.",
    "t12": "Lợi thế: Quản lý tài khoản của JOZO giúp khách hàng hiểu được việc sử dụng nền tảng và tối ưu hóa quy trình kinh doanh; Đội ngũ kỹ thuật của JOZO thực hiện bảo trì và cập nhật thường xuyên, đảm bảo hoạt động ổn định của nền tảng và giới thiệu các mô-đun mới dễ sử dụng để cung cấp trải nghiệm người dùng tốt hơn và hiệu quả hơn."
  }
}
</i18n>
