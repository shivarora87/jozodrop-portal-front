<script setup>
import {navList,labelConfig} from '@/components/Layout-Header/components/navList'
import { ref } from 'vue'
import {useI18nLang} from '@hooks'
import {getLang} from '@hooks/useStorage.js'


const {t} = useI18nLang()


let serviceList = (navList?.value || []).find(({ label }) => label === 'Service')?.children || []
serviceList = ref(serviceList)
</script>

<template>
  <div class="layout-footer-container">
    <div class="columns-wrap flex flex-horizontal-center">
      <div class="inner-columns-wrap flex">
        <div class="column-item">
          <div class="column-title flex flex-vertical-center">
            <img src="@/assets/img/global/footer/logo.png" alt="" class="logo-img" />
          </div>
          <div class="company-name">
            {{t('t1')}}: Jozo Electronic Technology Co., Ltd.
          </div>
          <div class="contract-us">{{t('t15')}}: <a href="mailto:xxx.com" target="_blank">xxx.com</a></div>
          <div class="contract-us">{{t('t16')}}: <a href="mailto:xxx.com" target="_blank">xxx.com</a></div>
          <div class="icon-list flex flex-horizontal-between flex-vertical-center">
            <a href="mailto:xxx.com" target="_blank" class="icon-link">
              <img src="@/assets/img/global/footer/icon-1.png" alt="" class="icon-img">
            </a>
            <a href="https://xxx.com" target="_blank" class="icon-link">
              <img src="@/assets/img/global/footer/icon-2.png" alt="" class="icon-img">
            </a>
            <a href="https://xxx.com" target="_blank" class="icon-link">
              <img src="@/assets/img/global/footer/icon-3.png" alt="" class="icon-img">
            </a>
            <a href="https://xxx.com" target="_blank"
               class="icon-link">
              <img src="@/assets/img/global/footer/icon-6.svg" alt="" class="icon-img" style="height: 1.3375vw">
            </a>
            <a href="https://xxx.com" target="_blank"
               class="icon-link">
              <img src="@/assets/img/global/footer/icon-7.svg" alt="" class="icon-img">
            </a>
          </div>
        </div>
        <div class="column-item">
          <div class="column-title flex flex-vertical-center">{{t('t3')}}</div>
          <ul class="column-link-list">
            <li
              v-for="(item, index) in serviceList"
              :key="index"
              class="column-link-item"
            >
              <router-link :to="item.to" target="_blank" class="link">{{ labelConfig[getLang()][item.label] }}</router-link>
            </li>
          </ul>
        </div>
        <div class="column-item">
          <div class="column-title flex flex-vertical-center">{{t('t4')}}</div>
          <ul class="column-link-list">
            <li class="column-link-item">
              <router-link to="/procurement" target="_blank" class="link">{{t('t5')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/contractUs#work-container" target="_blank" class="link">{{t('t6')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/aboutUs/blog" target="_blank" class="link">{{t('t7')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/privacy" target="_blank" class="link">{{t('t8')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/termsOfUse" target="_blank" class="link">{{t('t9')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/termsOfService" target="_blank" class="link">{{t('t14')}}</router-link>
            </li>
          </ul>
        </div>
        <div class="column-item">
          <div class="column-title flex flex-vertical-center">{{t('t10')}}</div>
          <ul class="column-link-list">
            <li class="column-link-item">
              <router-link to="/" target="_blank" class="link">{{t('t11')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/aboutUs/jozo" target="_blank" class="link">{{t('t12')}}</router-link>
            </li>
            <li class="column-link-item">
              <router-link to="/#step-container" target="_blank" class="link">{{t('t13')}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--<div class="copyright-wrap flex flex-horizontal-center">-->
    <!--  &lt;!&ndash;todo:修改版权&ndash;&gt;-->
    <!--  &lt;!&ndash;<div class="copyright-label">Copyright © 2022 TJOZOXXXX. A</div>&ndash;&gt;-->
    <!--  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="record-number"-->
    <!--  >豫ICP备2023002701号-2</a-->
    <!--  >-->
    <!--</div>-->
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.layout-footer-container {
  color: #ffffff;
  background: #0077f0;

  .columns-wrap {
    background: #0077f0;
    color: #ffffff;
    padding: 64px;

    .inner-columns-wrap {
      width: px2vw(1350);

      .column-item {
        width: 25%;
        padding: px2vw(10) px2vw(20);

        .column-title {
          font-size: var(--desc-fz--large);
          margin-bottom: px2vw(13);
          font-weight: bolder;
          height: reactive(48);

          .logo-img {
            height: 100%;
          }
        }

        .column-link-list {
          padding: 0;
          margin: 0;
          list-style: none;

          .column-link-item {
            line-height: 36px;
            cursor: pointer;
            text-decoration: none;
            font-size: var(--desc-fz--default);
            transition: color 300ms linear;

            .link {
              color: #ffffff;
              text-decoration: none;
              transition: color 300ms linear;

              &:hover {
                color: #f47514;
              }
            }

            &:hover {
              color: #f47514;
            }
          }
        }

        .company-name {
          font-size:var(--desc-fz--small);
          line-height: px2vw(24);
        }

        .contract-us {
          font-size: var(--desc-fz--small);
          line-height: px2vw(30);

          a {
            text-decoration: none;
            color: #ffffff;
          }
        }

        .icon-list {
          margin-top: px2vwV2(24);
          padding-right: px2vwV2(40);

          .icon-link {
            transition: transform 300ms;
            font-size: 0;

            .icon-img {
              height: px2vwV2(24);
            }

            &:hover {
              transform: scale(1.5);
            }
          }
        }
      }
    }
  }

  .copyright-wrap {
    background: #036cd7;
    padding: px2vw(14) 0;
    font-size: var(--desc-fz--default);
    gap: px2vw(995);

    .record-number {
      text-decoration: none;
      color: #ffffff;
      font-size: 12px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Company name",
    "t2": "Contact us",
    "t3": "Services",
    "t4": "Community",
    "t5": "Winning Products",
    "t6": "Affiliates",
    "t7": "Blog",
    "t8": "Privacy Policy",
    "t9": "Terms And Conditions",
    "t10": "Quick Links",
    "t11": "Home",
    "t12": "About Us",
    "t13": "How it Works",
    "t14": "Terms Of Service",
    "t15": "Complaints and Suggestions",
    "t16": "Business Cooperation"
  },
  "vn": {
    "t1": "Tên công ty",
    "t2": "Liên hệ",
    "t3": "Dịch vụ",
    "t4": "Cộng đồng",
    "t5": "Sản phẩm đoạt giải",
    "t6": "Đối tác",
    "t7": "Trang chủ",
    "t8": "Chính sách bảo mật",
    "t9": "Điều khoản&Điều kiện",
    "t10": "Liên kết nhanh",
    "t11": "Trang chủ",
    "t12": "Về chúng tôi",
    "t13": "Làm thế nào nó hoạt động",
    "t14": "Điều khoản dịch vụ",
    "t15": "Khiếu nại&Tư vấn",
    "t16": "Hợp tác kinh doanh"
  }
}
</i18n>
