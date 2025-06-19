<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="personnel-container ">
    <div class="content-wrap flex flex-column flex-vertical-center">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="icon-wrap flex flex-vertical-center">
        <div class="icon-item flex flex-column flex-vertical-center">
          <div class="icon-box flex flex-column flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/service/warehouse/personnel/icon-1.png" alt="" class="icon-img" />
            <div class="icon-value">15 +</div>
          </div>
          <div class="label">{{t('t2')}}</div>
        </div>
        <div class="icon-item flex flex-column flex-vertical-center">
          <div class="icon-box flex flex-column flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/service/warehouse/personnel/icon-2.png" alt="" class="icon-img" />
            <div class="icon-value">3000 +</div>
          </div>
          <div class="label">{{t('t3')}}</div>
        </div>
        <div class="icon-item flex flex-column flex-vertical-center">
          <div class="icon-box flex flex-column flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/service/warehouse/personnel/icon-3.png" alt="" class="icon-img" />
            <div class="icon-value">50000 +</div>
          </div>
          <div class="label">{{t('t4')}}</div>
        </div>
        <div class="icon-item flex flex-column flex-vertical-center">
          <div class="icon-box flex flex-column flex-horizontal-center flex-vertical-center">
            <img src="@/assets/img/service/warehouse/personnel/icon-4.png" alt="" class="icon-img" />
            <div class="icon-value">80000 +</div>
          </div>
          <div class="label">{{t('t5')}}</div>
        </div>
      </div>
      <div class="img-wrap flex">
        <img src="@/assets/img/service/warehouse/personnel/img-1.png" alt="" class="left-img" />
        <div class="right-content flex flex-column flex-horizontal-between">
          <div class="desc">{{t('t6')}}</div>
          <div class="img-box flex flex-horizontal-between">
            <img
              src="@/assets/img/service/warehouse/personnel/img-2.png"
              alt=""
              class="right-img scale"
            />
            <img
              src="@/assets/img/service/warehouse/personnel/img-3.png"
              alt=""
              class="right-img scale"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.personnel-container {
  padding: 72px 0 46px;
  background: #ffffff;

  .block-title {
    margin-bottom: 73px;
  }

  .icon-wrap {
    gap: 41px;
    margin-bottom: 61px;

    .icon-item {
      .icon-box {
        width: 252px;
        height: 128px;
        background: #f1f7ff;
        margin-bottom: 12px;
        border-radius: 64px;

        .icon-img {
          width: 32px;
          margin-bottom: 20px;
        }

        .icon-value {
          font-size:var(--desc-fz--large);
          color: #708cbf;
          font-weight: bolder;
        }
      }

      .label {
        font-size: var(--desc-fz--default);
        color: #000000;
        font-weight: bold;
        text-align: center;
      }

      &:nth-child(1),
      &:nth-child(2) {
        .icon-box {
          border-top-left-radius: 0;
        }
      }

      &:nth-child(3),
      &:nth-child(4) {
        .icon-box {
          border-top-right-radius: 0;
        }
      }
    }
  }

  .img-wrap {
    .left-img {
      width: 582px;
      margin-right: 32px;
    }

    .right-content {
      .desc {
        font-size:var(--desc-fz--default);
        color: #000000;
        line-height: 24px;
        width: 508px;
        margin-bottom: 10px;
      }

      .img-box {
        .right-img {
          width: 244px;
        }
      }
    }
  }
}
</style>


<i18n>
{
  "en": {
    "t1": "WAREHOUSE PERSONNEL",
    "t2": "working personnel",
    "t3": "shipping order",
    "t4": "Monthly order processing volume",
    "t5": "Maximum monthly order processing",
    "t6": "Currently, there are 15 warehouse staff members. The handling of goods is carried out with complete and standardized processes. The daily shipment orders amount to around 3000, with an average of 50,000 orders processed per month."
  },
  "vn": {
    "t1": "Nhân viên kho",
    "t2": "Nhân viên",
    "t3": "Đơn hàng vận chuyển",
    "t4": "Khối lượng xử lý đơn hàng hàng tháng",
    "t5": "Khối lượng xử lý đơn hàng tối đa mỗi tháng",
    "t6": "Hiện tại, nhà kho có tổng cộng 15 nhân viên. Việc xử lý hàng hóa được thực hiện theo một quy trình đầy đủ và chuẩn hóa. Khoảng 3.000 đơn hàng được vận chuyển mỗi ngày và trung bình 50.000 đơn hàng được xử lý mỗi tháng."
  }
}
</i18n>
