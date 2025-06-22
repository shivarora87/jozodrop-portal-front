<script setup>
import Typed from 'typed.js'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18nLang } from '@hooks'
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'


const { t, langModel } = useI18nLang()

const $content = ref()

let typedInstance

const showVideoDialog = ref(false)

const initTyped = () => {
  typedInstance = new Typed($content.value, {
    strings: [t('typed')],
    typeSpeed: 20,
    loop: true,
    backDelay: 5000
  })
}


onMounted(() => {
  initTyped()
  watch(langModel, () => {
    typedInstance && typedInstance.destroy()
    initTyped()
  })
  onUnmounted(() => {
    typedInstance && typedInstance.destroy()
  })
})
</script>

<template>
  <div class="banner-container flex">
    <video src="/media/home-short-video-1.mp4" poster="/media/home-short-video-1.png" muted playsinline loop autoplay class="video-bg" />
    <div class="play-button flex flex-vertical-center">
      <svg
        version="1.1"
        id="play"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xml:space="preserve"
      >
        <path
          class="stroke-solid"
          fill="none"
          stroke="white"
          d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7  C97.3,23.7,75.7,2.3,49.9,2.5"
        />
        <path
          class="stroke-dotted"
          fill="none"
          stroke="white"
          d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7  C97.3,23.7,75.7,2.3,49.9,2.5" />
        <path
          class="icon"
          fill="white"
          d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
        />
      </svg>
      <span class="label" @click="showVideoDialog = true">Why we choose Jozo</span>
    </div>
    <div class="content">
      <div class="desc-1">DO 1+N SERVICES</div>
      <div class="typed-content-box">
        <span ref="$content" class="typed-content" />
      </div>
      <div class="desc-2-box">
        <div>Dream, Ship, Succeed</div>
        <div>with Jozo</div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="showVideoDialog"
    title=""
    width="1040px"
    append-to-body
    style="--el-dialog-box-shadow:none;--el-message-close-size:30px;--el-color-info:#fff;--el-dialog-bg-color:transparent;"
    modal-class="home-banner-video-modal"
    destroy-on-close
  >
    <div style="margin-top: 20px;border-radius: 12px;overflow: hidden;">
      <iframe
        width="960"
        height="540"
        src="https://jozodrop.co.uk"
        title="Jozo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.banner-container {
  position: relative;
  color: #ffffff;
  margin-top: -62px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  .video-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }

  .content {
    padding-left: px2vwV2(90);
    padding-right: px2vwV2(90);
    padding-top: 225px;
    padding-bottom: 80px;
    z-index: 3;

    .desc-1 {
      font-size: 70px;
      font-weight: 400;
      margin-bottom: px2vwV2(64);
      text-shadow: 0 4px rgba(255, 255, 255, 0.6);
    }

    .typed-content-box {
      width: 100%;
      font-size: 50px;
      font-weight: bolder;
      word-break: break-word;
      margin-bottom: 30px;

      .typed-content {
      }
    }

    .desc-2-box {
      font-size: 48px;
    }
  }

  .play-button {
    position: absolute;
    right: px2vwV2(90);
    bottom: px2vwV2(90);
    z-index: 4;
    padding: px2vwV2(12) px2vwV2(24);
    border-radius: px2vwV2(60);
    transition: background-color 300ms;
    cursor: pointer;

    #play {
      margin-right: 4px;
      width: 18px;
      height: 18px;
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .stroke-dotted {
        opacity: 0;
        stroke-dasharray: 16, 20;
        stroke-width: 1px;
        transform-origin: 50% 50%;
        animation: spin 4s infinite linear;
        transition: opacity 1s ease,
        stroke-width 1s ease;
      }

      .stroke-solid {
        stroke-dashoffset: 0;
        stroke-dashArray: 300;
        stroke-width: 8px;
        transition: stroke-dashoffset 1s ease, opacity 1s ease;
      }

      .icon {
        transform-origin: 50% 50%;
        transition: transform 200ms ease-out;
      }

    }

    .label {
      font-size: 18px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);

      #play {
        .stroke-dotted {
          stroke-width: 8px;
          opacity: 1;
        }

        .stroke-solid {
          opacity: 0;
          stroke-dashoffset: 300;
        }

        .icon {
          transform: scale(1.05);
        }
      }
    }
  }

}

@media screen and (max-width: 1200px) {
  .banner-container {
    margin-top: 0;




    .content {
      padding-top: px2vwV2(450);
      padding-bottom: px2vwV2(160);

      .desc-1 {
        font-size: px2vwV2(140);
        text-shadow: 0 px2vwV2(8) rgba(255, 255, 255, 0.6);
      }

      .typed-content-box {
        font-size: px2vwV2(100);
        margin-bottom: px2vwV2(60);

        .typed-content {
        }
      }

      .desc-2-box {
        font-size: px2vwV2(96);
      }
    }

    .play-button {

      #play {
        width: px2vwV2(72);
        height: px2vwV2(72);
        //margin-right: px2vwV2(8);
      }

      .label {
        font-size: px2vwV2(72);
      }

    }

  }
}
</style>
<style>
.home-banner-video-modal {
  background: rgba(0, 0, 0, 0.9);
}
</style>
<i18n>
{
  "en": {
    "typed": "Ensure efficient order processing and drive your business growth."
  },
  "vn": {
    "typed": "Đảm bảo xử lý đơn đặt hàng hiệu quả và thúc đẩy doanh nghiệp của bạn phát triển."
  }
}
</i18n>
