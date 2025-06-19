<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="work-container" id="work-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="sub-title">{{ t('t2') }}</div>
      <div class="card-list">
        <div class="card-item flex flex-column flex-vertical-center">
          <div class="index flex flex-horizontal-center flex-vertical-center">1</div>
          <div class="icon-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/contractus/work/icon-1.png" alt="" class="icon-img">
          </div>
          <div class="desc">{{ t('t3') }}</div>
        </div>
        <div class="card-item flex flex-column flex-vertical-center">
          <div class="index flex flex-horizontal-center flex-vertical-center">2</div>
          <div class="icon-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/contractus/work/icon-2.png" alt="" class="icon-img">
          </div>
          <div class="desc">{{ t('t4') }}</div>
        </div>
        <div class="card-item flex flex-column flex-vertical-center">
          <div class="index flex flex-horizontal-center flex-vertical-center">3</div>
          <div class="icon-box flex flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/contractus/work/icon-3.png" alt="" class="icon-img">
          </div>
          <div class="desc">{{ t('t5') }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.work-container {
  padding:  140px 0;
  background: #ffffff;

  .block-title {
    margin-bottom: 40px;
  }

  .sub-title {
    font-size: var(--desc-fz--large);
    color: #000000;
    font-weight: bolder;
    margin-bottom: 135px;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }

  .card-item {
    position: relative;
    padding: 0 30px 46px;
    box-shadow: rgb(196, 224, 252) 4.5px 12px 0 0;
    border-radius: 8px;
    background: #f1f7ff;

    .icon-box {
      width: 100px;
      height:100px;
      border-radius: 50%;
      background: #0077f0;
      margin-top: -50px;
      margin-bottom: 22px;

      .icon-img {
        width: 40px;
      }
    }

    .desc {
      font-size: var(--desc-fz--small);
      line-height: 32px;
      color: #000000;
    }

    .index {
      position: absolute;
      width: 43px;
      height: 68px;
      background: #bfd4ff;
      border-bottom-left-radius: 22px;
      border-bottom-right-radius: 22px;
      font-size: var(--desc-fz--large);
      color: #ffffff;
      text-decoration: underline;
      font-weight: bolder;
      top: 0;
      left: 30px;
      text-underline-offset: 6px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "HOW DOES IT WORK?",
    "t2": "IT'S VERY SIMPLE! JUST THREE STEPS",
    "t3": "Join the program: First, you need to become our affiliate marketing partner. The joining process is quick and easy, without complex audits.",
    "t4": "Share referral links: Once you become a partner, you will receive an exclusive referral link. Share this link with your friends, family, or any potential new users.",
    "t5": "Earn commissions: Every time someone comes to our website through your referral link and completes an order, we will refund 1.5% of the order payment amount as your affiliate commission."
  },
  "vn": {
    "t1": "Nó hoạt động như thế nào?",
    "t2": "Rất đơn giản! Chỉ cần 3 bước",
    "t3": "Tham gia chương trình: Trước tiên, bạn cần trở thành đối tác tiếp thị liên kết của chúng tôi. Quá trình kết nối nhanh chóng và đơn giản mà không cần kiểm toán phức tạp.",
    "t4": "Chia sẻ liên kết giới thiệu: Khi bạn trở thành đối tác, bạn sẽ nhận được một liên kết giới thiệu độc quyền. Chia sẻ liên kết này với bạn bè, gia đình hoặc bất kỳ người dùng mới tiềm năng nào.",
    "t5": "Kiếm hoa hồng: Bất cứ khi nào ai đó truy cập trang web của chúng tôi thông qua liên kết giới thiệu của bạn và hoàn thành đơn đặt hàng, chúng tôi sẽ hoàn lại 1,5% số tiền thanh toán của đơn đặt hàng làm hoa hồng liên kết của bạn.",
  }
}
</i18n>
