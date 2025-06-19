<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'
import Map from './map.vue'

const {t} = useI18nLang()
</script>

<template>
  <div class="speed-container">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="content-wrap flex">
        <div class="left-list-box flex flex-column">
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-1.png" alt="" class="item-icon" />
            <div class="label">{{t('t2')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">17+</div>
          </div>
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-2.png" alt="" class="item-icon" />
            <div class="label">{{t('t3')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">207</div>
          </div>
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-3.png" alt="" class="item-icon" />
            <div class="label">{{t('t4')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">7-12</div>
          </div>
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-4.png" alt="" class="item-icon" />
            <div class="label">{{t('t5')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">4-7</div>
          </div>
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-5.png" alt="" class="item-icon" />
            <div class="label">{{t('t6')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">7-10</div>
          </div>
          <div class="item-box flex flex-vertical-center">
            <img src="@/assets/img/service/logistics/speed/icon-6.png" alt="" class="item-icon" />
            <div class="label">{{t('t7')}}</div>
            <div class="value flex flex-horizontal-center flex-vertical-center">5-8</div>
          </div>
        </div>
        <div class="right-content-box flex flex-column flex-horizontal-between">
          <div class="desc-box flex flex-horizontal-between">
            <div class="desc">
              {{t('t8')}}
            </div>
            <img src="@/assets/img/service/logistics/speed/desc-img.png" alt="" class="desc-img" />
          </div>
          <div class="map-box flex flex-horizontal-center flex-vertical-center">
            <!--<img src="@/assets/img/service/logistics/speed/map.png" alt="" class="map-img" />-->
            <Map/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.speed-container {
  padding: 73px 0 62px;

  .block-title {
    margin-bottom: 63px;
  }

  .content-wrap {
    gap: 27px;

    .left-list-box {
      padding: 19px 22px;
      background: #f1f7ff;
      border-radius: 11px;
      gap: 17px;

      .item-box {
        padding: 14px 8px;
        background: #ffffff;
        border-radius: 11px;
        gap: 8px;

        .item-icon {
          width: 44px;
        }

        .label {
          font-size:var(--desc-fz--small);
          color: #000000;
          line-height: 20px;
          width: 99px;
        }

        .value {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f1f7ff;
          font-size: var(--desc-fz--default);
          color: #9883cf;
          font-weight: bolder;
        }
      }
    }

    .right-content-box {
      .desc-box {
        margin-bottom: 20px;
        .desc {
          font-size: var(--desc-fz--default);
          line-height: 24px;
        }

        .desc-img {
          width: 302px;
        }
      }

      .map-box {
        height: 395px;
        background: #f1f7ff;
        border-radius: 11px;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "JOZO'S DELIVERY SPEED",
    "t2": "Logistics supplier cooperation",
    "t3": "Reachable country",
    "t4": "Time of arrival in Europe",
    "t5": "Arrival time in the UK",
    "t6": "Time of arrival in the US",
    "t7": "Time of arrival in Australia",
    "t8": "JOZO collaborates with a total of 17 logistics providers, all of which are highly professional logistics companies capable of delivering to 207 countries, covering a wide range of channels including general cargo, special cargo, slightly sensitive, and highly sensitive items. Typically, delivery to European countries takes 7-12 days, 4-7 days to the UK, 7-10 days to the USA and Canada, and 5-8 days to Australia. Delivery times depend on the destination"
  },
  "vn": {
    "t1": "Tốc độ giao hàng của JOZO",
    "t2": "Hợp tác với nhà cung cấp logistics",
    "t3": "Các quốc gia có thể tiếp cận",
    "t4": "Thời gian đến Châu Âu",
    "t5": "Thời gian đến UK",
    "t6": "Thời gian đến Hoa Kỳ",
    "t7": "Thời gian đến Úc",
    "t8": "JOZO làm việc với tổng cộng 17 nhà cung cấp dịch vụ logistics, tất cả đều là các công ty logistics có chuyên môn cao, có khả năng cung cấp hàng hóa đến 207 quốc gia, bao gồm một loạt các kênh bao gồm hàng hóa thông thường, hàng hóa đặc biệt, các mặt hàng nhạy cảm và rất nhạy cảm. Thông thường, phải mất 7-12 ngày để vận chuyển đến các nước châu Âu, 4-7 ngày để vận chuyển đến Vương quốc Anh, 7-10 ngày để vận chuyển đến Hoa Kỳ và Canada và 5-8 ngày để vận chuyển đến Úc. Thời gian giao hàng phụ thuộc vào điểm đến"
  }
}
</i18n>
