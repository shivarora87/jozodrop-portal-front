<script setup>
import BannerTitle from '@/views/common/banner-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="banner-container flex flex-column flex-vertical-center">
    <div class="desc-wrap-1 ">
      <div class="content-wrap flex flex-column flex-vertical-center">
        <div class="content-box flex flex-vertical-top">
          <div class="left-box">
            <BannerTitle :title="t('t1')" class="banner-title" />
            <div class="desc">
              <span class="blue">{{t('t2')}}</span>{{t('t3')}}
              <span class="orange">{{t('t4')}}</span>{{t('t5')}}
              <span class="orange">{{t('t6')}}</span>{{t('t7')}}
            </div>
          </div>
          <img src="@/assets/img/service/procurement/banner/right-img.png" alt="" class="desc-img" />
        </div>
      </div>
    </div>
    <div class="desc-wrap-2 ">
      <div class="content-wrap flex">
        <img src="@/assets/img/service/procurement/banner/left-img.png" alt="" class="desc-img" />
        <div class="desc-box flex flex-column flex-horizontal-between">
          <div class="icon-box flex">
            <img src="@/assets/img/service/procurement/banner/icon-1.png" alt="" class="icon-img" />
            <img src="@/assets/img/service/procurement/banner/icon-2.png" alt="" class="icon-img" />
            <img src="@/assets/img/service/procurement/banner/icon-3.png" alt="" class="icon-img" />
          </div>
          <div class="desc">
            {{t('t8')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.banner-container {
  padding-bottom: 60px;

  .blue {
    color: #0073e8;
  }

  .orange {
    color: #ff6b00;
    font-weight: bolder;
  }

  .desc-wrap-1 {
    background: linear-gradient(to bottom, #ffffff, #a0bfff);
    width: 100%;
    border-bottom-right-radius: 70px;

    .content-box {
      .banner-title {
        margin-bottom: 28px;
        align-self: flex-start;
      }

      .desc {
        font-size: var(--desc-fz--default);
        line-height: 28px;
        color: #000000;
      }
    }

    .desc-img {
      width: 400px;
      margin-top: 54px;
    }
  }

  .desc-wrap-2 {
    margin-top: -100px;

    .desc-img {
      width: 260px;
      margin-right: 26px;
    }

    .desc-box {
      .icon-box {
        padding-left: 10px;
        gap: 24px;

        .icon-img {
          width: 80px;
        }
      }

      .desc {
        font-size: var(--desc-fz--default);
        line-height: 28px;
        color: #000000;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "JOZO'S PRODUCT PROCUREMENT:",
    "t2": "JOZO ",
    "t3": "has partnerships with over ",
    "t4": "5000+ premium suppliers ",
    "t5": ", covering ",
    "t6": "300+ product categories ",
    "t7": ", offering a diverse selection of products to meet various needs. There are no minimum order quantities or wholesale requirements, only popular products with high quality and low cost to boost your sales and fulfill your diverse demands.",
    "t8": "Additionally, JOZO continuously updates its product inventory to meet the evolving needs of customers. Our suppliers undergo rigorous screening, and the selected ones possess excellent production capabilities and quality control to ensure reliable product quality,  providing you with higher quality products at lower prices."
  },
  "vn": {
    "t1": "Sản phẩm của JOZO:",
    "t2": "JOZO ",
    "t3": "đã thiết lập quan hệ đối tác với hơn ",
    "t4": "5000+ nhà cung cấp chất lượng ",
    "t5": ", bao gồm hơn ",
    "t6": "300+ danh mục sản phẩm",
    "t7": ", cung cấp các lựa chọn sản phẩm đa dạng để đáp ứng các nhu cầu khác nhau. Không có số lượng đặt hàng tối thiểu hoặc yêu cầu bán buôn, chỉ có các sản phẩm phổ biến chất lượng cao, chi phí thấp để thúc đẩy doanh số của bạn và đáp ứng nhu cầu đa dạng của bạn.",
    "t8": "Ngoài ra, JOZO liên tục cập nhật kho sản phẩm của mình để đáp ứng nhu cầu thay đổi của khách hàng. Các nhà cung cấp của chúng tôi được sàng lọc nghiêm ngặt và các nhà cung cấp được chọn có năng lực sản xuất tuyệt vời và kiểm soát chất lượng để đảm bảo chất lượng sản phẩm đáng tin cậy, cung cấp cho bạn các sản phẩm chất lượng cao hơn với giá thấp hơn."
  }
}
</i18n>
