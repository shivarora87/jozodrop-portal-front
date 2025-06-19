<script setup>
import { ElTabs, ElTabPane } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'

const tabModel = defineModel()
</script>

<template>
  <div class="tabs-container content-wrap">
    <el-tabs v-model="tabModel" class="tabs-warp">
      <el-tab-pane label="SHOPIFY" name="shopify">
        <template #label>
          <span class="tab-item-label">SHOPIFY</span>
        </template>
      </el-tab-pane>
      <el-tab-pane label="WOOCOMMERCE" name="woocommerce">
        <template #label>
          <span class="tab-item-label">WOOCOMMERCE</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.tabs-container {
  padding-top: 20px;


  :deep(.tabs-warp) {
    width: 800px;

    .el-tabs__header {
      margin-bottom: 0;

      .el-tabs__nav-wrap {
        &:after {
          background: #71b7ff;
        }

        .el-tabs__nav-scroll .el-tabs__nav {
          .el-tabs__active-bar {
            height: 6px;
            background: #0077f0;
          }

          .el-tabs__item {
            padding: 0 50px 20px;
            height: auto;

            .tab-item-label {
              font-weight: bolder;
              font-size: 22px;
              color: #8ba6df;
              padding: 0 17px;
            }

            &:nth-child(2) {
              padding-left: 0;
            }

            &:last-child {
              padding-right: 0;
            }

            &.is-active {
              .tab-item-label {
                color: #0077f0;
              }
            }
          }
        }
      }
    }

    .el-tabs__content {
      display: none;
    }
  }
}
</style>
