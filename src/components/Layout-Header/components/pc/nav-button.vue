<script setup>
import { CaretBottom } from '@element-plus/icons-vue'
import { ElPopover } from 'element-plus'
import 'element-plus/es/components/popover/style/css'
import usePopover from './usePopover'
import useActiveMenu from './useActiveMenu'
import {labelConfig} from '../navList'
import {getLang} from '@hooks/useStorage.js'



const props = defineProps({
  label: String,
  to: String,
  isLink:Boolean,
  children: {
    type: Array,
    default: () => []
  },
  isNeedTranslate:{
    type:Boolean,
    default:true
  }
})

defineEmits(['subNavItemClick'])

const { isShowSubNav, $routerLink, _popoverStyle, showPopover } = usePopover()
const { isMenuActive } = useActiveMenu(props)

const getLabel = langLabelKey=> labelConfig[getLang()][langLabelKey]
</script>

<template>
  <el-popover
    :disabled="!props.children.length"
    v-model:visible="isShowSubNav"
    placement="bottom"
    transition="el-zoom-in-top"
    :show-arrow="false"
    :popper-style="_popoverStyle"
    popper-class="nav-popover"
  >
    <template #reference>
      <a
        v-if="props.isLink"
        :href="props.to"
        target="_blank"
        class="nav-button"
        :class="{isHomePage:$route.name==='Home'}"
      >
        {{ isNeedTranslate?getLabel(props.label):props.label}}
      </a>
      <component
        v-else
        ref="$routerLink"
        :is="props.children.length ? 'span' : 'router-link'"
        :to="props.to"
        target="_self"
        :class="['nav-button', { active: isMenuActive,isHomePage:$route.name==='Home' }]"
        @mouseenter="showPopover"
      >
        <span class="nav-label">{{ isNeedTranslate?getLabel(props.label):props.label }}</span>
        <CaretBottom
          v-if="props.children.length"
          :class="['nav-arrow', { 'is-open': isShowSubNav }]"
        />
      </component>
    </template>
    <div class="dropdown-panel flex flex-column">
      <router-link
        v-for="(subNavItem, subNavItemIndex) in props.children"
        :key="subNavItemIndex"
        :to="subNavItem.to"
        class="dropdown-nav-item flex flex-horizontal-center flex-vertical-center"
        @click="$emit('subNavItemClick',subNavItem)"
      >
        {{ isNeedTranslate?getLabel(subNavItem.label): subNavItem.label}}
      </router-link>
    </div>
  </el-popover>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.nav-button {
  text-decoration: none;
  font-size:var(--nav-btn-fz);
  color: #000;
  line-height: 1;
  padding: 6px 19px;
  border-radius: 21px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  display: inline-flex;
  align-items: center;
  gap: px2vw(10);
  position: relative;
  transition: border-color 600ms cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  white-space: nowrap;

  .nav-arrow {
    width: 15px;
    height: 20px;
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

    &.is-open {
      transform: rotate(180deg);
    }
  }

  &:hover,
  &.active {
    border-color: #000000;
  }

  &.isHomePage{
    color: #ffffff;
    &:hover,
    &.active {
      border-color: #ffffff;
    }
  }
}

.dropdown-panel {
  padding: 0 13px;

  .dropdown-nav-item {
    text-decoration: none;
    color: #000000;
    white-space: nowrap;
    height: 55px;
    font-size:var(--nav-btn-fz);
    padding: 10px;
    transition: color 300ms;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      background: #d3d3d3;
      transform: scaleY(0.5);
      bottom: 0;
    }

    &:last-child:after {
      display: none;
    }

    &:hover {
      color: #68b3ff;
    }
  }
}
</style>
<style lang="scss">
@import '@/assets/style/px2vw.scss';

.nav-popover {
  box-shadow: 0 px2vwV2(4) px2vwV2(12) 0 rgba(0, 0, 0, 0.08) !important;
  border-radius: px2vwV2(13) !important;
}
</style>
