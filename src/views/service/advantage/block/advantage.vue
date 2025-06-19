<script setup>
import { ref } from 'vue'
import BlockTitle from '@/views/common/block-title.vue'
import AdvantageCard from '../components/advantage-card.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

const cartListRow1 = ref([
  {
    iconName: 'icon-3',
    title: 't1',
    desc: 't2'
  },
  {
    iconName: 'icon-5',
    title: 't3',
    desc: 't4'
  }
])
const cartListRow2 = ref([
  {
    iconName: 'icon-4',
    title: 't5',
    desc: 't6'
  },
  {
    iconName: 'icon-2',
    title: 't7',
    desc: 't8'
  }
])
const cartListRow3 = ref([
  {
    iconName: 'icon-4',
    title: 't9',
    desc: 't10'
  },
  {
    iconName: 'icon-2',
    title: 't11',
    desc: 't12'
  }
])
</script>

<template>
  <div class="advantage-container ">
    <div class="content-wrap flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t13')" color="#0077f0" class="block-title" />
      <div class="img-preview-wrap flex">
        <div class="left-box flex flex-column flex-horizontal-between">
          <div class="advantage-summary">
            {{t('t14')}}
          </div>
          <div class="preview-img-list flex flex-horizontal-between">
            <img
              src="@/assets/img/service/advantage/advantage/img-1.png"
              alt=""
              class="preview-img scale"
            />
            <img
              src="@/assets/img/service/advantage/advantage/img-2.png"
              alt=""
              class="preview-img scale"
            />
            <img
              src="@/assets/img/service/advantage/advantage/img-3.png"
              alt=""
              class="preview-img scale"
            />
          </div>
        </div>
        <img src="@/assets/img/service/advantage/advantage/img-4.png" alt="" class="right-img" />
      </div>
      <div class="card-wrap flex flex-column flex-vertical-center">
        <div class="row flex">
          <AdvantageCard v-for="(item, index) in cartListRow1" :key="index" v-bind="item" :t="t"/>
        </div>
        <div class="row flex">
          <AdvantageCard v-for="(item, index) in cartListRow2" :key="index" v-bind="item" :t="t"/>
        </div>
        <div class="row flex">
          <AdvantageCard v-for="(item, index) in cartListRow3" :key="index" v-bind="item" :t="t"/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.advantage-container {
  padding: 80px 0 60px;
  background: #f1f7ff;
  box-shadow: rgb(213, 231, 255) 10.3289px 10.3289px 0px 0px;

  .block-title {
    margin-bottom: 70px;
  }

  .img-preview-wrap {
    gap: 40px;
    margin-bottom: 50px;

    .left-box {
      gap: 30px;

      .advantage-summary{
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        color: #000000;
        font-size: var(--desc-fz--default);
        line-height: 24px;
      }

      .preview-img-list {
        .preview-img {
          border-radius: 10px;
          width: 200px;
        }
      }
    }

    .right-img {
      width: 330px;
    }
  }

  .card-wrap {
    gap: 50px;

    .row {
      gap: 50px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Platform Pricing Model ",
    "t2": "Pricing structure: Product costs and shipping costs are separated. The shipping cost for each order is calculated based on cost and weight, which is more reasonable and saves you shipping costs.",
    "t3": "Efficient Order Processing and Additional Features",
    "t4": "You can batch process orders according to your needs, handling up to 1000 orders simultaneously. The platform also offers additional features such as downloading invoices, managing multiple stores, and setting up sub-accounts.",
    "t5": "Reliable and Responsible After-Sales Service",
    "t6": "We provide reliable and responsible after-sales service, such as for damaged products, wrong products, lost parcels, etc. As long as it's confirmed to be our fault, we will replace or refund according to your requirements, free of charge.",
    "t7": "Platform Recharge Benefits",
    "t8": "Recharge $500 or more on the platform and receive bonus credits based on the recharge amount. There are occasional large recharge bonus events, coupon distribution, etc.",
    "t9": "High Automation",
    "t10": "Stores automatically sync orders, and tracking numbers are synced to your store in real-time.",
    "t11": "Continuous Innovation",
    "t12": "JOZO consistently launches new products and services, following market changes and customer demands to maximally satisfy diverse customer needs.",
    "t13": "PLATFORM ADVANTAGES",
    "t14": "In the years of deep cultivation in the Dropshipping industry, JOZO has been committed to providing comprehensive and high-quality service experiences to customers, continuously enhancing its own competitiveness, and has won the trust and support of a large number of customers."
  },
  "vn": {
    "t1": "Mô hình giá nền tảng",
    "t2": "Cơ cấu giá: Chi phí sản phẩm và chi phí vận chuyển được tách biệt. Chi phí vận chuyển cho mỗi đơn đặt hàng được tính toán theo chi phí và trọng lượng, điều này hợp lý hơn và có thể tiết kiệm chi phí vận chuyển của bạn.",
    "t3": "Xử lý đơn hàng hiệu quả và các tính năng bổ sung",
    "t4": "Bạn có thể xử lý đơn đặt hàng với số lượng lớn theo yêu cầu của bạn, lên đến 1000 đơn đặt hàng cùng một lúc. Nền tảng này cũng cung cấp các tính năng khác như tải xuống hóa đơn, quản lý nhiều cửa hàng và thiết lập tài khoản phụ.",
    "t5": "Dịch vụ hậu mãi đáng tin cậy và có trách nhiệm",
    "t6": "Chúng tôi cung cấp dịch vụ hậu mãi đáng tin cậy và có trách nhiệm, chẳng hạn như sản phẩm bị hư hỏng, sản phẩm sai, bưu kiện bị mất, v.v. Miễn là xác nhận đó là lỗi của chúng tôi, chúng tôi sẽ thay thế hoặc hoàn lại tiền miễn phí theo yêu cầu của bạn.",
    "t7": "Ưu đãi nạp tiền nền tảng",
    "t8": "Nạp $500 trở lên trên nền tảng và nhận điểm thưởng dựa trên số tiền nạp. Đôi khi có các sự kiện phần thưởng nạp tiền lớn, phân phối phiếu giảm giá, v.v.",
    "t9": "Tự động hóa cao",
    "t10": "Cửa hàng tự động đồng bộ hóa đơn đặt hàng và số theo dõi được đồng bộ hóa với cửa hàng của bạn trong thời gian thực.",
    "t11": "Đổi mới liên tục",
    "t12": "JOZO liên tục giới thiệu các sản phẩm và dịch vụ mới, theo sát những thay đổi của thị trường và nhu cầu của khách hàng để đáp ứng tối đa nhu cầu đa dạng của khách hàng.",
    "t13": "Lợi thế nền tảng",
    "t14": "Trong nhiều năm nghiên cứu sâu về ngành công nghiệp Dropshipping, JOZO luôn nỗ lực cung cấp cho khách hàng trải nghiệm dịch vụ toàn diện và chất lượng, không ngừng nâng cao khả năng cạnh tranh của mình, giành được sự tin tưởng và hỗ trợ của đông đảo khách hàng."
  }
}
</i18n>
