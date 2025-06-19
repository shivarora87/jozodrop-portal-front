<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="teamwall-container flex flex-column flex-vertical-center">
    <div class="content-wrap  flex flex-column flex-vertical-center">
      <BlockTitle
        :label="t('t1')"
        color="#0077f0"
        class="block-title"
      />
      <div class="avatar-box">
        <img src="@/assets/img/service/procurement/teamwall/avatar.png" alt="" class="avatar-img" />
      </div>
      <div class="statistical-classification-wrap flex">
        <div class="statistical-classification-box flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/procurement/teamwall/icon-1.png" alt="" class="icon-img" />
          <div class="content-box flex flex-column flex-horizontal-between flex-vertical-center">
            <div class="label">{{ t('t2') }}</div>
            <div class="value-box flex flex-horizontal-center flex-vertical-center">200+</div>
          </div>
        </div>
        <div class="statistical-classification-box flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/procurement/teamwall/icon-2.png" alt="" class="icon-img" />
          <div class="content-box flex flex-column flex-horizontal-between flex-vertical-center">
            <div class="label">{{ t('t3') }}</div>
            <div class="value-box flex flex-horizontal-center flex-vertical-center">1000+</div>
          </div>
        </div>
        <div class="statistical-classification-box flex flex-column flex-vertical-center">
          <img src="@/assets/img/service/procurement/teamwall/icon-3.png" alt="" class="icon-img" />
          <div class="content-box flex flex-column flex-horizontal-between flex-vertical-center">
            <div class="value-box">
              {{ t('t4') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-line flex flex-horizontal-center"></div>

  </div>
</template>

<style scoped lang="scss">
.teamwall-container {
  padding: 74px 0 46px;
  background: #ffffff;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 564px;
    height: 394px;
    background: url('@/assets/img/service/procurement/teamwall/bg.png') center center / 100% 100% no-repeat;
    position: absolute;
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
    transform: rotateY(180deg);
  }

  .block-title {
    margin-bottom: 40px;
  }

  .avatar-box {
    position: relative;
    margin-bottom: 57px;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 200px;
      height: 198px;
      background: url('@/assets/img/service/procurement/teamwall/avatar-bg.png') top left / 100% 100% no-repeat;
    }

    .avatar-img {
      width: 174px;
      position: relative;
      z-index: 2;
    }
  }

  .statistical-classification-wrap {
    gap: 57px;
    margin-bottom: 58px;

    .statistical-classification-box {
      .icon-img {
        width: 56px;
        margin-bottom: 32px;
      }

      .content-box {
        border-radius: 9px;
        width: 364px;
        height: 192px;
        box-sizing: border-box;
        padding: 28px 21px 22px;

        .label {
          font-size: var(--desc-fz--default);
          color: #000000;
          font-weight: bolder;
        }

        .value-box {
          width: 181px;
          height: 96px;
          font-size: var(--block-title-fz);
          font-weight: bolder;
          border-radius: 28px;
        }
      }

      &:nth-child(1) {
        .content-box {
          background: #f6f1ff;

          .value-box {
            background: #e8dbfe;
            color: #7664ff;
          }
        }
      }

      &:nth-child(2) {
        .content-box {
          background: #fff5ef;

          .value-box {
            background: #ffdac2;
            color: #ff950a;
          }
        }
      }

      &:nth-child(3) {
        .content-box {
          background: #f6f1ff;
          position: relative;

          &:before,
          &:after {
            content: '”';
            font-size: var(--block-title-fz);
            position: absolute;
            color: #7664ff;
            font-weight: bolder;
          }

          &:before {
            left: 12px;
            top: 0;
          }

          &:after {
            right: 12px;
            bottom: 0;
            transform: rotateY(180deg);
          }

          .value-box {
            color: #000;
            font-size: var(--desc-fz--default);
            width: 100%;
            height: 100%;
            border-radius: 0;
            font-weight: normal;
            line-height: 24px;
          }
        }
      }
    }
  }

  .bottom-line {
    width: 100%;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #0077f0;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: 1;
      transform: translateY(-50%);
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      z-index: 2;
      width: 573px;
      height: 19px;
      background: url('@/assets/img/service/procurement/teamwall/bottom-line.png') center center /
        100% 100% no-repeat;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "PROCUREMENT TEAM PERFORMANCE WALL",
    "t2": "Number of suppliers contacted",
    "t3": "Number of products created",
    "t4": "Choose Jozodrop and you gain a powerful procurement partner. Our strength and expertise will provide solid support for the growth of your business."
  },
  "vn": {
    "t1": "Tường hiệu suất đội mua sắm",
    "t2": "Số lượng nhà cung cấp liên hệ",
    "t3": "Số lượng sản phẩm tạo ra",
    "t4": "Chọn Jozodrop và bạn sẽ có được một đối tác mua sắm mạnh mẽ. Sức mạnh và chuyên môn của chúng tôi sẽ hỗ trợ vững chắc cho sự phát triển kinh doanh của bạn."
  }
}
</i18n>
