<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="management-container">
    <div class="content-wrap  flex flex-column ">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
      <div class="desc-wrap-1 flex flex-vertical-bottom">
        <div class="left-box flex flex-horizontal-between">
          <img src="@/assets/img/service/warehouse/management/img-1.png" alt="" class="left-img" />
          <div class="left-desc">
            {{t('t2')}}
          </div>
        </div>
        <div class="right-desc">
          {{t('t3')}}
        </div>
      </div>
      <div class="desc-wrap-2 flex">
        <div class="left-box flex flex-column flex-horizontal-between">
          <div class="card-list flex flex-vertical-center flex-horizontal-between">
            <div class="card-item flex flex-vertical-center">
              <img
                src="@/assets/img/service/warehouse/management/icon-1.png"
                alt=""
                class="card-icon"
              />
              <div class="card-content">
                <div class="card-title">{{t('t4')}}</div>
                <div class="card-value">1200 ㎡</div>
              </div>
            </div>
            <div class="card-item flex flex-vertical-center">
              <img
                src="@/assets/img/service/warehouse/management/icon-2.png"
                alt=""
                class="card-icon"
              />
              <div class="card-content">
                <div class="card-title">{{t('t5')}} A</div>
                <div class="card-value">3500 +</div>
              </div>
            </div>
            <div class="card-item flex flex-vertical-center">
              <img
                src="@/assets/img/service/warehouse/management/icon-3.png"
                alt=""
                class="card-icon"
              />
              <div class="card-content">
                <div class="card-title">{{t('t5')}} B</div>
                <div class="card-value">2000 +</div>
              </div>
            </div>
          </div>
          <div class="location-box flex flex-vertical-top">
            <img
              src="@/assets/img/service/warehouse/management/icon-4.png"
              alt=""
              class="location-img"
            />
            <div class="location">
              {{t('t6')}}
            </div>
          </div>
        </div>
        <img src="@/assets/img/service/warehouse/management/img-2.png" alt="" class="right-img" />
      </div>
    </div>
    <div class="video-wrap">
      <img src="@/assets/img/service/warehouse/management/video-img.png" alt="" class="video-img" />
    </div>
    <div style="background: #ffffff">
      <div class="content-wrap" >
        <div class="foot-wrap flex flex-horizontal-center">
          <div class="foot-item flex flex-vertical-center">
            <img src="@/assets/img/service/warehouse/management/img-3.png" alt="" class="left-img" />
            <div class="label">
              {{t('t7')}}
            </div>
          </div>
          <div class="foot-item flex flex-vertical-center">
            <img src="@/assets/img/service/warehouse/management/img-4.png" alt="" class="left-img" />
            <div class="label">
              {{t('t8')}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.management-container {
  padding: 53px 0 0;
  background: #f1f7ff;

  .block-title {
    margin-bottom: 58px;
    text-align: center;
  }

  .desc-wrap-1 {
    margin-bottom: 24px;

    .left-box {
      width: 857px;
      margin-right: 26px;

      .left-img {
        width: 244px;
        margin-right: 34px;
      }

      .left-desc {
        color: #000000;
        font-size:var(--desc-fz--default);
        line-height: 24px;
        border-bottom: 1px solid #0077f0;
      }
    }

    .right-desc {
      padding: 15px;
      background: #dbeaff;
      font-size: var(--desc-fz--default);
      line-height: 24px;
      border-radius: 5px;
      box-sizing: border-box;
      width: 261px;
      flex-shrink: 0;
    }
  }

  .desc-wrap-2 {
    margin-bottom: 38px;

    .left-box {
      width: 857px;
      margin-right: 26px;

      .card-list {
        margin-bottom: 20px;
        .card-item {
          padding: 22px 16px;
          background: #ffffff;
          border-radius: 5px;

          .card-icon {
            width: 40px;
            margin-right: 18px;
          }

          .card-content {
            .card-title {
              font-size: var(--desc-fz--default);
              color: #000000;
              white-space: nowrap;
            }

            .card-value {
              font-size:var(--desc-fz--default);
              color: #0077f0;
              font-weight: bolder;
            }
          }
        }
      }

      .location-box {
        .location-img {
          width: 136px;
        }

        .location {
          font-size: var(--desc-fz--default);
          color: #000000;
          line-height: 24px;
        }
      }
    }

    .right-img {
      width: 261px;
    }
  }

  .video-wrap {
    width: 100%;

    .video-img {
      width: 100%;
    }
  }

  .foot-wrap {
    gap: 51px;
    width: 100%;
    background: #ffffff;
    padding: 55px 0 53px;

    .foot-item {
      height: 122px;
      padding: 0 22px;
      background: #f1f7ff;
      border-radius: 61px;

      .left-img {
        margin-right: 24px;
        transform: translateY(-18px);
      }

      .label {
        width: 268px;
        font-size: var(--desc-fz--small);
        line-height: 22px;
      }
    }

    &:first-child {
      .left-img {
        width: 196px;
      }
    }
    &:last-child {
      .left-img {
        width: 188px;
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "GOODS STORAGE MANAGEMENT",
    "t2": "The warehouse is located in Shenzhen, enjoying a favorable geographical position, which makes receiving and collecting goods extremely convenient.",
    "t3": "Mechanized Tools: The use of mechanized tools such as automatic scanning and sorting machines further enhances processing efficiency and reduces human errors.",
    "t4": "Warehouse footprint",
    "t5": "Warehouse Area",
    "t6": "The warehouse occupies an area of 1200 square meters and is divided into A and B areas for storing goods. Area A has 3500 small shelf positions, while area B has 2000 large shelf positions. Zone management facilitates improved picking efficiency and maximizes warehouse space utilization.",
    "t7": "Good inventory management capabilities enable accurate tracking of goods in and out.",
    "t8": "Proficient operation of warehouse equipment and tools ensures smooth handling and transportation of goods."
  },
  "vn": {
    "t1": "Quản lý kho hàng",
    "t2": "Nhà kho nằm ở Thâm Quyến, vị trí địa lý tuyệt vời, rất thuận tiện để nhận và nhận hàng.",
    "t3": "Công cụ cơ giới hóa: Việc sử dụng các công cụ cơ giới hóa như quét tự động và máy phân loại tiếp tục cải thiện hiệu quả xử lý và giảm lỗi của con người.",
    "t4": "Diện tích kho",
    "t5": "Diện tích kho",
    "t6": "Nhà kho có diện tích 1200 m2 và được chia thành khu A và B để lưu trữ hàng hóa. Khu A có 3.500 vị trí kệ nhỏ, trong khi Khu B có 2.000 vị trí kệ lớn. Quản lý khu vực giúp nâng cao hiệu quả lựa chọn và tối đa hóa việc sử dụng không gian kho.",
    "t7": "Khả năng quản lý hàng tồn kho tốt cho phép theo dõi chính xác hàng hóa đến và đi.",
    "t8": "Vận hành thành thạo các thiết bị và công cụ kho để đảm bảo xử lý và vận chuyển hàng hóa trơn tru."
  }
}
</i18n>
