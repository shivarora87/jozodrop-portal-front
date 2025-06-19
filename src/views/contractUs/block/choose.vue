<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="choose-container ">
    <div class="content-wrap flex flex-horizontal-center" >
      <div class="grid-wrap">
        <BlockTitle :label="t('t1')"  color="#0077f0" class="block-title" />
        <div class="desc-box desc-box-1 flex flex-vertical-center">
          <img src="@/assets/img/contractus/choose/icon-1.png" alt="" class="icon-img">
          <div class="desc">
            <div class="desc-title">{{ t('t2') }}</div>
            {{ t('t3') }}
          </div>
        </div>
        <div class="desc-box desc-box-2 flex flex-vertical-center">
          <img src="@/assets/img/contractus/choose/icon-2.png" alt="" class="icon-img">
          <div class="desc">
            <div class="desc-title">{{ t('t4') }}</div>
            {{ t('t5') }}
          </div>
        </div>
        <div class="desc-box desc-box-3 flex flex-vertical-center">
          <img src="@/assets/img/contractus/choose/icon-2.png" alt="" class="icon-img">
          <div class="desc">
            <div class="desc-title">{{ t('t6') }}</div>
            {{ t('t7') }}
          </div>
        </div>
        <div class="desc-box desc-box-4 flex flex-vertical-center">
          <img src="@/assets/img/contractus/choose/icon-2.png" alt="" class="icon-img">
          <div class="desc">
            <div class="desc-title">{{ t('t8') }}</div>
            {{ t('t9') }}
          </div>
        </div>
        <img src="@/assets/img/contractus/choose/img-1.png" alt="" class="img-1">
        <img src="@/assets/img/contractus/choose/img-2.png" alt="" class="img-2">
        <img src="@/assets/img/contractus/choose/img-3.png" alt="" class="img-3" style="border-radius: 10px">
        <img src="@/assets/img/contractus/choose/img-4.png" alt="" class="img-4">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.choose-container {
  padding-bottom: 100px;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 96vw;
    height: 208px;
    background: #f1f7ff;
    border-top-right-radius: 95px;
    top: 192px;
    z-index: 1;
  }

  .grid-wrap {
    width: 100%;
    z-index: 2;
    display: inline-grid;
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(3, auto);
    align-items: start;
    grid-template-areas:  'title      title       title'
                          'img-1      desc-box-1  img-2'
                          'desc-box-2 desc-box-2  img-2'
                          'img-3      desc-box-3  img-4'
                          'img-3      desc-box-4  img-4';


    .block-title {
      grid-area: title;
      justify-self: center;
      margin-bottom: 63px;
    }

    .img-1 {
      grid-area: img-1;
      width: 300px;
    }

    .img-2 {
      grid-area: img-2;
      width: 300px;
      margin-top: 160px;
    }

    .img-3 {
      grid-area: img-3;
      width: 350px;
      margin-right: 20px;
      align-self: center;
    }

    .img-4 {
      grid-area: img-4;
      width: 300px;
      align-self: center;
    }

    .desc-box {
      gap: 25px;

      .icon-img {
        width:50px;
      }

      .desc {
        font-size: var(--desc-fz--small);
        color: #000000;
        line-height: 24px;

        .desc-title {
          font-size: var(--desc-fz--default);
          font-weight: bolder;
          line-height: 37px;
        }
      }
    }

    .desc-box-1 {
      grid-area: desc-box-1;
      margin-top: 132px;
      align-self: center;

      .desc {
        margin-right: 40px;
      }
    }

    .desc-box-2 {
      padding-top: 130px;
      grid-area: desc-box-2;
      margin-bottom: 46px;
    }

    .desc-box-3 {
      grid-area: desc-box-3;
      align-self: end;
    }

    .desc-box-4 {
      grid-area: desc-box-4;
      align-self: start;
    }

  }
}

</style>


<i18n>
{
  "en": {
    "t1": "WHY CHOOSE US?",
    "t2": "Generous rewards",
    "t3": "We offer industry-leading commission rates, ensuring that each of your referrals is worthwhile.",
    "t4": "Transparent tracking",
    "t5": "Through a professional affiliate marketing platform, you can track the performance and commission earnings of your referral links in real-time",
    "t6": "Easy withdrawal",
    "t7": "Commission earnings can be easily withdrawn without complicated processes.",
    "t8": "Professional support",
    "t9": "Our team is ready to provide assistance at any time, ensuring that your promotional journey is smooth and unhindered."
  },
  "vn": {
    "t1": "Tại sao chọn chúng tôi?",
    "t2": "Phần thưởng hấp dẫn",
    "t3": "Chúng tôi cung cấp tỷ lệ hoa hồng hàng đầu trong ngành để đảm bảo rằng mọi đề xuất của bạn đều đáng giá.",
    "t4": "Theo dõi trong suốt",
    "t5": "Với nền tảng tiếp thị liên kết chuyên nghiệp, bạn có thể theo dõi hiệu suất và doanh thu hoa hồng của các liên kết giới thiệu trong thời gian thực",
    "t6": "Rút tiền dễ dàng",
    "t7": "Thu nhập hoa hồng có thể được rút ra dễ dàng mà không cần quá trình phức tạp.",
    "t8": "Hỗ trợ chuyên nghiệp",
    "t9": "Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ để đảm bảo chuyến đi quảng cáo của bạn diễn ra suôn sẻ và không bị cản trở."
  }
}
</i18n>
