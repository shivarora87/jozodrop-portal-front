<script>
export default {
  props: ['dataImage'],
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    }
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    }
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  }
}
</script>

<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform]" />
      <div class="card-info">
        <div class="title-box">
          <slot name="title-icon" />
          <div class="title-label">
            <slot name="title-label" />
          </div>
        </div>
        <div class="content">
          <slot name="content" />
        </div>
        <div class="btn">Learn More</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);


.card-wrap {
  margin: px2vwV2(50);
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;

  .card {
    position: relative;
    flex: 0 0 240px;
    width: 300px;
    height: 450px;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(black, 0.3) 0 30px 60px 0;
    transition: 1s $returnEasing;

    .card-bg {
      opacity: 0.5;
      position: absolute;
      top: -20px;
      left: -20px;
      width: 100%;
      height: 100%;
      padding: 20px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transition: 1s $returnEasing,
      opacity 5s 1s $returnEasing;
      pointer-events: none;
      box-sizing: content-box;
    }

    .card-info {
      width: 100%;
      height: 100%;
      padding: 20px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;


      * {
        position: relative;
        z-index: 1;
        flex-shrink: 0;
      }

      .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title-label {
          font-size: var(--desc-fz--default);
          font-weight: bolder;
          color: #333333;
          word-break: break-word;
          text-align: center;
        }
      }

      .content {
        font-size: var(--desc-fz--small);
        color: #333333;
        margin-bottom: 20px;
        word-break: break-all;
      }

      .btn {
        width: 140px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #409eff;
        font-size: var(--desc-fz--small);
        color: #ffffff;
        cursor: pointer;
        border-radius: 20px;
      }

    }

  }

  &:hover {
    .card-info {
      transform: translateY(0);
    }

    .card-info p {
      opacity: 1;
    }

    .card-info, .card-info p {
      transition: 0.6s $hoverEasing;
    }

    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }

    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }

    .card {
      transition: 0.6s $hoverEasing,
      //box-shadow 2s $hoverEasing;
      //box-shadow: rgba(white, 0.2) 0 0 40px 5px,
      //rgba(white, 1) 0 0 0 1px,
      //rgba(black, 0.66) 0 30px 60px 0,
      //inset #333 0 0 0 5px,
      //inset white 0 0 0 6px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .card-wrap {
    .card {
      flex: 0 0 px2vwV2(480);
      width: px2vwV2(530);
      height: px2vwV2(900);
      border-radius: px2vwV2(20);
      box-shadow: rgba(black, 0.3) 0 px2vwV2(60) px2vwV2(120) 0;

      .card-bg {
        opacity: 0.5;
        position: absolute;
        top: px2vwV2(-40);
        left: px2vwV2(-40);
        padding: px2vwV2(40);

      }

      .card-info {

        padding: px2vwV2(40);


        .title-box {


          .title-label {
            font-size: px2vwV2(40);

          }
        }

        .content {
          font-size: px2vwV2(28);
          margin-bottom: px2vwV2(40);
        }

        .btn {
          width: px2vwV2(280);
          height: px2vwV2(80);
          font-size: px2vwV2(28);
          border-radius: px2vwV2(40);
        }
      }
    }

  }
}


</style>
