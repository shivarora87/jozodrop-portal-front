<script setup>
import { ref } from 'vue'
import {useI18nLang} from '@hooks'
import BlockTitle from '@/views/common/block-title.vue'

const {t} = useI18nLang()

const platformDataIcons = import.meta.glob('@/assets/img/home/platform-sales-data/*.png', {
  eager: true
})
const getPlatformDataIcon = (fileName) => {
  const baseUrl = `/src/assets/img/home/platform-sales-data/${fileName}.png`
  return platformDataIcons[baseUrl].default
}
const platformSalesDataList = ref([
  {
    icon: getPlatformDataIcon('customers-icon'),
    value: '10000+',
    label: 't2'
  },
  {
    icon: getPlatformDataIcon('transportation-destination-icon'),
    value: '30+',
    label: 't3'
  },
  {
    icon: getPlatformDataIcon('product-category-icon'),
    value: '10+',
    label: 't4'
  },

  {
    icon: getPlatformDataIcon('language-type-icon'),
    value: '5',
    label: 't5'
  },
  {
    icon: getPlatformDataIcon('workers-icon'),
    value: '100+',
    label: 't6'
  }
])
</script>

<template>
  <div class="platform-sales-data-1-container flex flex-column flex-vertical-center">
    <div class="content-wrap">
      <BlockTitle :label="t('t1')" color="#0077f0" class="block-title"/>
      <div class="list flex flex-horizontal-center">
        <div
          v-for="(platformSalesDataItem, platformSalesDataItemIndex) in platformSalesDataList"
          :key="platformSalesDataItemIndex"
          class="item flex flex-column flex-vertical-center flex-shrink-0"
        >
          <div class="item-top-box flex flex-column flex-horizontal-center flex-vertical-center">
            <img
              :src="platformSalesDataItem.icon"
              :alt="platformSalesDataItem.label"
              class="item-icon-img"
            />
            <div class="item-value">{{ platformSalesDataItem.value }}</div>
          </div>
          <div class="item-label">{{ t(platformSalesDataItem.label) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.platform-sales-data-1-container {
  padding: 50px 0;
  .block-title{
    margin-bottom: 50px;
    text-align: center;
  }

  .list {
    width: 100%;
    justify-content: space-between;

    .item {
      .item-top-box {
        width: 150px;
        height: 120px;
        border-radius: 60px;
        background: #f1f7ff;
        margin-bottom:17px;

        .item-icon-img {
          margin-bottom: 10px;
          width: 24px;
        }

        .item-value {
          font-size:var(--desc-fz--large);
          color: #708cbf;
          font-weight: bolder;
        }
      }

      .item-label {
        font-size: var(--desc-fz--small);
        color: #000000;
        font-weight: bolder;
      }

      &:nth-child(1),
      &:nth-child(2) {
        .item-top-box {
          border-top-left-radius: 0;
        }
      }

      &:nth-child(3) .item-top-box {
        border-radius: 22px;
      }

      &:nth-child(4),
      &:nth-child(5) {
        .item-top-box {
          border-top-right-radius: 0;
        }
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "PLATFORM SALES DATA",
    "t2": "Customers",
    "t3": "Transportation destination",
    "t4": "Product category",
    "t5": "Language type",
    "t6": "Workers"
  },
  "vn": {
    "t1": "Dữ liệu bán hàng nền tảng",
    "t2": "Khách hàng",
    "t3": "Điểm đến vận chuyển",
    "t4": "Danh mục sản phẩm",
    "t5": "Loại ngôn ngữ",
    "t6": "Công nhân"
  }
}
</i18n>

