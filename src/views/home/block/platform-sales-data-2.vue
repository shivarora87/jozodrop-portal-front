<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import 'element-plus/es/components/carousel/style/css'
import 'element-plus/es/components/carousel-item/style/css'

</script>

<template>
  <div class="platform-sales-data-2-container">
    <div class="inner-container flex flex-column flex-vertical-center">
      <BlockTitle
        label="PLATFORM SALES DATA"
        circle-color="#ffffff"
        class="block-title"
      />
      <div class="info-wrap flex flex-column flex-vertical-center">
        <el-carousel
          motion-blur
          :autoplay="true"
          arrow="never"
          class="carousel"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="inner-box flex flex-column flex-vertical-center">
              <img
                src="@/assets/img/home/platform-sales-data2/customer-avator.png"
                alt=""
                class="avator-img"
              />
              <div class="user-name">M Talha Irfan</div>
              <img
                src="@/assets/img/home/platform-sales-data2/customer-evaluation.png"
                alt=""
                class="evaluation-img"
              />
              <div class="date">May 04, 2023</div>
              <div class="desc">
                JOZO offers a wide selection and diversity of products, and the products are high quality
                and low price. I can choose from a variety of products, which greatly meet the different
                needs and preferences of my store.
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="line" />
      </div>
      <div class="bottom-line flex flex-horizontal-center"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.platform-sales-data-2-container {
  padding-top: px2vw(110);

  .inner-container {
    background: url('@/assets/img/home/platform-sales-data2/bg.jpg') center center/3099px 100% no-repeat;
    color: #000000;
    padding-bottom: px2vw(64);

    .block-title {
      margin-top: px2vwV2(116);
      margin-bottom: px2vwV2(133);
    }

    .info-wrap {
      background: #ffffff;
      border-radius: px2vw(20);
      align-self: stretch;
      margin: 0 px2vw(60) px2vw(80);
      position: relative;

      .carousel {
        margin-top: px2vw(-63);
        width: 100%;
        height: px2vwV2(600);

        .avator-img {
          margin-bottom: px2vw(30);
          width: px2vw(126);
        }

        .user-name {
          font-size: px2vw(26);
          font-weight: bolder;
          margin-bottom: px2vw(15);
        }

        .evaluation-img {
          margin-bottom: px2vw(20);
          width: px2vw(148);
        }

        .date {
          font-size: px2vw(18);
          margin-bottom: px2vw(50);
        }

        .desc {
          font-size: px2vw(20);
          margin-bottom: px2vw(96);
          width: px2vw(800);
          word-break: break-word;
          line-height: px2vw(36);
          text-align: center;
          color: #000000;
        }

        :deep(.el-carousel__container) {
          height: 100%;
        }
      }


      .line {
        width: px2vw(993);
        height: px2vw(7);
        background: #3091f3;
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: reactive(110);
        height: reactive(108);
        background: url('@/assets/img/home/platform-sales-data2/face.png') center center / 100% 100% no-repeat;
      }

      &:before {
        left: px2vw(30);
        top: px2vw(30);
      }

      &:after {
        right: px2vw(30);
        bottom: px2vw(30);
      }
    }

    .bottom-line {
      width: 100%;
      height: px2vw(29);
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
        width: px2vw(1493);
        height: 100%;
        background: url('@/assets/img/home/platform-sales-data2/footer-line.png') center center /
          100% 100% no-repeat;
      }
    }
  }
}
</style>
