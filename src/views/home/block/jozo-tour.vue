<script setup>

</script>

<template>
  <div class="jozo-tour-container">
    <div class="content-wrap">
      <div class="left">
        <div class="title">JOZO TOUR</div>
        <div class="desc">
          JOZO's success is not only reflected in our performance, but also in our unique corporate culture and team
          spirit. We believe that the best results come from the best teamwork. This short video will give you a
          behind-the-scenes look at what goes on at Jozo's headquarters.
          It's important to us that we provide a healthy and happy working environment for our employees.
        </div>
        <div class="btn">Request a Free Quote</div>
      </div>
      <div class="right">
        <video src="/media/jozo-tour.mp4" autoplay loop muted class="video"></video>
      </div>
      <div class="desc-2">Enjoy your visit and read our FAQs for more details!</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.jozo-tour-container {
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: #ffffff;

  .content-wrap {
    display: flex;
    flex-direction: column;

    .left {
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      padding: 20px 40px;
      margin-bottom: 40px;


      .title {
        font-size: var(--block-title-fz);
        color: #409eff;
        margin-bottom: 30px;
        font-weight: bolder;
      }

      .desc {
        font-size: var(--desc-fz--default);
        color: #606267;
        margin-bottom:30px;
      }

      .btn {
        width: 180px;
        height: 40px;
        border-radius: 20px;
        font-size: var(--desc-fz--small);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #409eff;
        cursor: pointer;
        margin-left: auto;
      }
    }

    .right {
      flex-shrink: 0;
      margin-bottom: 40px;

      .video {
        width: 100%;
        border-radius: 10px;
      }
    }

    .desc-2{
      font-size: var(--desc-fz--default);
    }
  }


}

@media screen and (max-width: 1200px) {
  .jozo-tour-container {
  }
}
</style>
