<script setup>
import { ref, watchEffect } from 'vue'
import { ElPagination } from 'element-plus'
import 'element-plus/es/components/pagination/style/css'
import useFetch from '@/utils/useFetch'

const baseUrl = ref(import.meta.env.PROD ? '' : 'http://xxx.com')
const listData = ref([])
const paginationData = ref({
  total: 0,
  currentPage: 1
})

const fetchList = async () => {
  try {
    const { rows, total } = await useFetch(`/portal/aboutUsList?pageNum=${paginationData.value.currentPage}&pageSize=6`)
    listData.value = rows
    paginationData.value.total = total
  } catch (e) {
  }
}
watchEffect(fetchList)

import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
</script>

<template>
  <div class="page-container flex flex-horizontal-center">
    <div class="content-wrap">
      <router-link
        v-for="(item,index) in listData"
        :key="index"
        :to="{path:'/aboutUs/blog/detail',query:{id:item.id}}"
        class="card-item flex flex-column flex-vertical-center"
      >
        <img :src="`${baseUrl}${item.mainUrl}`" alt="" class="card-img" />
        <!--<router-link :to="{path:'/aboutUs/blog/detail',query:{id:item.id}}" class="desc">{{ item.title }}</router-link>-->
        <div class="desc">{{ item.title }}</div>
      </router-link>
      <div class="pagination-box flex flex-horizontal-center flex-vertical-center">
        <el-pagination
          v-model:current-page="paginationData.currentPage"
          :total="paginationData.total"
          :page-size="6"
          background
          layout="prev, pager, next"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.page-container {
  padding-bottom: px2vwV2(73);
  background: #ffffff;

  .content-wrap {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, auto);
    gap: px2vwV2(81) px2vwV2(44);

    .card-item {
      padding: px2vwV2(45) px2vwV2(49) px2vwV2(24);
      background: #f1f7ff;
      border-radius: px2vwV2(10);
      box-shadow: px2vwV2(7) px2vwV2(16) 0 0 #c4e0fc;
      text-decoration: none;


      .card-img {
        width: px2vwV2(527);
        margin-bottom: px2vwV2(18);
      }

      .desc {
        width: px2vwV2(463);
        text-align: center;
        font-size: var(--desc-fz--small);
        color: #000000;
        line-height: px2vwV2(42);
        transition: color 300ms;
      }

      &:hover .desc {
        color: #68b3ff;
      }
    }

    :deep(.pagination-box) {
      grid-row: 3;
      grid-column: 1 / span 3;
      justify-self: center;

      .el-pagination {
        --el-pagination-button-height: 1.875vw;
        --el-pagination-button-width: 1.875vw;
        --el-pagination-font-size: 0.78125vw;
        --el-color-primary: #0078f2;
        gap: 2.148vw;

        .btn-prev,
        .btn-next,
        .number,
        .more {
          border-radius: 50%;
        }

        .el-pager {
          gap: 2.148vw;
        }
      }
    }
  }
}
</style>

<i18n>
  {
    "en": {
      "t1": "",
    },
    "vn": {
      "t1": "",
    }
  }
  </i18n>
