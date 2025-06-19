<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="display-container">
    <div class="content-wrap  flex flex-horizontal-center">
      <img src="@/assets/img/aboutUs/jozo/display/img-1.png" alt="" class="left-img" />
      <div class="data-box">
        <BlockTitle :label="t('t0')" color="#0077f0" class="block-title" />
        <div class="desc-box">
          <div class="desc">{{ t('t1') }}</div>
          <div class="desc">{{ t('t2') }}</div>
          <div class="desc">{{ t('t3') }}</div>
          <div class="desc">{{ t('t4') }}</div>
          <div class="desc">
            {{ t('t5') }}
          </div>
        </div>
      </div>
      <div class="right-list-box flex flex-column">
        <div class="list-item-box flex flex-vertical-center flex-horizontal-between">
          <div class="label-box flex flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/display/img-2.png" alt="" class="icon-img" />
            <div class="label">{{ t('t6') }}</div>
          </div>
          <div class="value">100+</div>
        </div>
        <div class="list-item-box flex flex-vertical-center flex-horizontal-between">
          <div class="label-box flex flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/display/img-3.png" alt="" class="icon-img" />
            <div class="label">{{ t('t7') }}</div>
          </div>
          <div class="value">50000+</div>
        </div>
        <div class="list-item-box flex flex-vertical-center flex-horizontal-between">
          <div class="label-box flex flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/display/img-4.png" alt="" class="icon-img" />
            <div class="label">{{ t('t8') }}</div>
          </div>
          <div class="value">200+</div>
        </div>
        <div class="list-item-box flex flex-vertical-center flex-horizontal-between">
          <div class="label-box flex flex-vertical-center">
            <img src="@/assets/img/aboutUs/jozo/display/img-5.png" alt="" class="icon-img" />
            <div class="label">{{ t('t9') }}</div>
          </div>
          <div class="value">10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.display-container {
  padding: 76px 0 54px;

  .content-wrap {
    gap: 34px;

    .left-img {
      width: 276px;
      align-self: flex-start;
    }

    .data-box {
      .block-title {
        margin-bottom: 39px;
      }

      .desc-box {
        .desc {
          font-size: var(--desc-fz--small);
          color: #000000;
          line-height: 24px;
        }
      }
    }

    .right-list-box {
      width: 312px;
      gap: 18px;
      flex-shrink: 0;

      .list-item-box {
        padding: 0 16px;
        height: 54px;
        background: #f1f7ff;
        border-radius: 11px;

        .label-box {
          .icon-img {
            width: 24px;
            margin-right: 12px;
          }

          .label {
            font-size: var(--desc-fz--default);
            font-weight: bolder;
            color: #000000;
          }
        }

        .value {
          font-size: var(--desc-fz--default);
          color: #0077f0;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t0": "DATA DISPLAY",
    "t1": "Staff: 100+",
    "t2": "Sales data: average monthly orders of 50,000",
    "t3": "Countries reached by shipping: 200 countries (Brazil, France, the United States, Spain,
    the
    United
    Kingdom,
    Germany,
    Australia,
    Sweden,
    the
    Netherlands,
    Canada,
    Belgium,
    the
    United
    Arab
    Emirates,
    Mexico,
    etc.)
    ",
    "t4": "Number of categories: 10",
    "t5": "Advantages of warehouse distribution: The warehouse is located in Shenzhen, with
    convenient
    transportation
    ",
    "t6": "Staff",
    "t7": "Sales data",
    "t8": "Navigable country",
    "t9": "Number of categories",
    "t10": ""
  },
  "vn": {
    "t0": "Hiển thị dữ liệu",
    "t1": "Số lượng nhân viên: 100+",
    "t2": "Số liệu bán hàng: Đơn hàng trung bình hàng tháng 50.000",
    "t3": "Các quốc gia được bao phủ bởi vận chuyển: 200 quốc gia (Brazil, Pháp, Mỹ, Tây Ban Nha,
    Anh,
    Đức,
    Úc,
    Thụy
    Điển,
    Hà
    Lan,
    Canada,
    Bỉ,
    Các
    Tiểu
    vương
    quốc
    Ả
    Rập
    Thống
    nhất,
    Mexico,
    v.v.)
    ",
    "t4": "Số lượng danh mục: 10",
    "t5": "Lợi thế phân phối kho: Kho nằm ở Thâm Quyến
    Giao
    thông
    thuận
    tiện
    ",
    "t6": "Nhân viên",
    "t7": "Dữ liệu bán hàng",
    "t8": "Quốc gia điều hướng",
    "t9": "Số lượng danh mục",
    "t10": ""
  }
}
</i18n>
