<script setup>
import { ref, nextTick } from 'vue'
import { ElCollapseTransition } from 'element-plus'
import { CaretBottom } from '@element-plus/icons-vue'
import {navList,labelConfig} from '@/components/Layout-Header/components/navList'
import {getLang} from '@hooks/useStorage.js'


let _navList = JSON.parse(JSON.stringify(navList.value))
_navList.forEach(item => item.isCollapse = true)
_navList = ref(_navList)

const isCollapse = ref(true)
const isHadSubMenu = (item) => {
  return item.children && item.children.length
}

const handlerNavItemClick = async (item) => {
  if (!isHadSubMenu(item)) {
    await nextTick()
    isCollapse.value = true
    return
  }
  item.isCollapse = !item.isCollapse
}
</script>

<template>
  <div class="header-container flex flex-vertical-center flex-horizontal-between">
    <img src="@/assets/img/global/logo.png" alt="" class="logo-img" />
    <button
      class="menu-button"
      :aria-pressed="!isCollapse"
      @click="isCollapse = !isCollapse"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="6.25" />
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="11.25" />
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="16.25" />
      </svg>
    </button>
    <el-collapse-transition>
      <div class="menu-panel" v-show="!isCollapse">
        <template v-for="(navItem, navIndex) in _navList" :key="navIndex">
          <a
            v-if="navItem.isLink"
            :href="navItem.to"
            target="_blank"
            class="menu-item flex flex-vertical-center flex-wrap-1"
          >
            {{labelConfig[getLang()][navItem.label] }}
          </a>
          <component
            v-else
            ref="$routerLink"
            :is="isHadSubMenu(navItem) ? 'span' : 'router-link'"
            :to="navItem.to"
            class='menu-item flex flex-vertical-center flex-wrap-1'
            @click="handlerNavItemClick(navItem)"
          >
            <span class="nav-label">{{ labelConfig[getLang()][navItem.label] }}</span>
            <CaretBottom
              v-if="navItem.children.length"
              class="nav-arrow"
            />
            <el-collapse-transition v-if="isHadSubMenu(navItem)">
              <div v-show="!navItem.isCollapse" class="sub-menu-panel  flex-shrink-0">
                <div class="sub-menu-panel-inner">
                  <router-link
                    v-for="(subNavItem, subNavItemIndex) in navItem.children"
                    :key="subNavItemIndex"
                    :to="subNavItem.to"
                    class='menu-item flex flex-vertical-center'
                    @click="isCollapse = true"
                  >
                    <span class="nav-label">{{ labelConfig[getLang()][subNavItem.label] }}</span>
                  </router-link>
                </div>
              </div>
            </el-collapse-transition>
          </component>
        </template>
      </div>
    </el-collapse-transition>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.header-container {
  padding: px2vw(25) px2vw(32);
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 20;

  .menu-button {
    width: px2vw(80);
    height: px2vw(80);
    display: grid;
    place-items: center;
    padding: 0;
    scale: 1;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;
    border-radius: 0.375vw;

  }

  button rect {
    transform-box: fill-box;
    transform-origin: 50% 50%;
    fill: #575a5e;
  }

  .unset rect {
    transform-box: unset;
  }

  [aria-pressed=true] rect {
    transition: translate 0.2s, rotate 0.2s 0.3s;
  }

  rect {
    transition: rotate 0.2s 0s, translate 0.2s 0.2s;
  }

  [aria-pressed=true] rect:nth-of-type(1) {
    translate: 0 333%;
    rotate: -45deg;
  }

  [aria-pressed=true] rect:nth-of-type(2) {
    rotate: 45deg;
  }

  [aria-pressed=true] rect:nth-of-type(3) {
    translate: 0 -333%;
    rotate: 45deg;
  }

  [aria-pressed=true] svg {
    rotate: 90deg;
    transition: rotate 1s 0.4s;
  }

  [aria-pressed=true] svg {
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu-panel {
    position: absolute;
    left: 0;
    width: 100%;
    top: 100%;
    z-index: 1;
    background: #ffffff;
    padding: 0 0 px2vw(60) 0;

    .menu-item {
      font-size: px2vw(80);
      padding: px2vw(40) px2vw(60);
      text-decoration: none;
      border-bottom: 1px solid #d3d3d3;

      a {
        color: #0077f0;
      }

      span {
        color: #000000;
      }

      .nav-arrow {
        width: px2vw(60);
        height: px2vw(60);
      }
    }

    .sub-menu-panel {
      width: 100%;
      padding: px2vw(60) px2vw(60);
      background: #ffffff;

      .sub-menu-panel-inner {
        border: 1px solid #d3d3d3;

        .menu-item:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
