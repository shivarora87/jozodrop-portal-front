<script setup>
import { inject } from 'vue'
import { ElIcon } from 'element-plus'
import { Document } from '@element-plus/icons-vue'
import { symbolCategoryList, symbolActiveCategory } from '@/views/faq/hooks/useFetchData'
const categoryList = inject(symbolCategoryList, [])
const activeCategory = inject(symbolActiveCategory)
</script>

<template>
  <div class="category-list-container flex flex-column">
    <div
      v-for="(item, index) in categoryList"
      :key="index"
      :class="['item-box', { active: activeCategory === item }]"
      @click="activeCategory = item"
    >
      <div class="inner-box flex flex-vertical-center">
        <div class="icon-box flex flex-horizontal-center flex-vertical-center">
          <el-icon class="icon" color="#0777e9">
            <Document />
          </el-icon>
        </div>
        <div class="category-name">{{ item.dictLabel }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-list-container {
  width: 309px;
  padding-top: 29px;
  padding-bottom: 208px;
  background: #f4f8ff;
  gap: 11px;
  flex-shrink: 0;

  .item-box {
    position: relative;
    padding: 8px 20px;
    cursor: pointer;
    --color: #000;
    --afterOpacity: 0;

    .inner-box {
      position: relative;
      z-index: 2;
      .icon-box {
        width: 29px;
        height: 29px;
        border-radius: 50%;
        background: #c7daff;
        margin-right: 13px;

        .icon {
          font-size: var(--desc-fz--small);
        }
      }

      .category-name {
        font-size: var(--desc-fz--small);
        line-height: 22px;
        color: var(--color);
        font-weight: bolder;
        transition: color 500ms linear;
      }
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: -17px;
      top: 0;
      width: 100%;
      height: 100%;
      background: #0073e8;
      z-index: 1;
      opacity: var(--afterOpacity);
      transition: all 150ms linear;
    }

    &:hover,
    &.active {
      --color: #ffffff;
      --afterOpacity: 1;
    }
  }
}
</style>
