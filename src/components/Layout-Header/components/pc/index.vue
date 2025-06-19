<script setup>
import { ElAffix } from 'element-plus'
import 'element-plus/es/components/affix/style/css'
import useScaleOnScroll from './useScaleOnScroll'
import { navList } from '../navList'
import NavButton from './nav-button.vue'
import ChangeLangButton from './changeLangButton.vue'
import LoginButton from './login-button.vue'
import GetInTouchButton from './get-in-touch-button.vue'
import { getLang } from '@hooks/useStorage.js'


const scaleOnScrollClassName = useScaleOnScroll()
</script>

<template>
  <el-affix :offset="0" :class="['header-affix',{isHomePage:$route.name === 'Home'}]">
    <div :class="['header-container', scaleOnScrollClassName]">
      <div class="header-wrap flex flex-vertical-center flex-horizontal-between">
        <img src="~@/assets/img/global/logo-white.png" class="logo-img" alt="jozodrop logo" @click="$router.push('/')" />
        <div :class="['nav-box flex flex-vertical-center',getLang()]">
          <!--<NavButton-->
          <!--  v-for="(navItem, navIndex) in navList"-->
          <!--  :key="navIndex"-->
          <!--  :label="labelConfig[getLang()][navItem.label]"-->
          <!--  :to="navItem.to"-->
          <!--  :is-link="navItem.isLink"-->
          <!--  :children="navItem.children"-->
          <!--/>-->
          <NavButton
            v-for="(navItem, navIndex) in navList"
            :key="navIndex"
            :label="navItem.label"
            :to="navItem.to"
            :is-link="navItem.isLink"
            :children="navItem.children"
          />
          <ChangeLangButton />
          <LoginButton />
          <GetInTouchButton />
        </div>
      </div>
    </div>
  </el-affix>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.header-affix {
  .header-container {
    padding: 10px 32px;
    background: #ffffff;
    z-index: 9;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    transition: padding 300ms linear;

    .header-wrap {
      .logo-img {
        width: 199px;
        transition: width 300ms linear;
        cursor: pointer;
      }

      .nav-box {
        gap: px2vw(20);

        &.vn {
          gap: px2vw(10);
        }
      }
    }

    &.isOnscroll {
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
    }
  }

  &.isHomePage {
    z-index: 9;
    position: relative;
    .header-container {
      background: transparent;
      backdrop-filter: blur(0);
      &.isOnscroll {
        background: rgba(64,158,255,0.4);
        backdrop-filter: blur(10px);
      }
    }
  }
}

</style>
