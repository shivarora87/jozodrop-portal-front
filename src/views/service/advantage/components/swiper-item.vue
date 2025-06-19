<script setup>
const props = defineProps({
  avatarName: String,
  userName: String,
  date: String,
  desc: String
})
const getAvatar = () =>
  new URL(`/src/assets/img/service/advantage/reviews/${props.avatarName}.png`, import.meta.url).href
</script>

<template>
  <div class="swiper-item-container">
    <div class="user-info-wrap flex flex-vertical-center">
      <img :src="getAvatar()" alt="" class="avatar-img" />
      <div class="user-info-box flex flex-column flex-vertical-center">
        <div class="user-name">{{ props.userName }}</div>
        <img
          src="@/assets/img/service/advantage/reviews/customer-evaluation.png"
          alt=""
          class="customer-evaluation-icon"
        />
        <div class="date">{{ props.date }}</div>
      </div>
    </div>
    <div class="desc">{{ props.desc }}</div>
  </div>
</template>

<style scoped lang="scss">
.swiper-item-container {
  padding: 17px 34px;
  background: #ffffff;
  border-radius: 17px;
  border-top-right-radius: 60px;
  box-shadow: 0 0 5px 1px rgba(0, 119, 240, 0.2);
  margin: 8px 24px;

  .user-info-wrap {
    margin-bottom: 8px;

    .avatar-img {
      border-radius: 50%;
      width: 100px;
      margin-right: 38px;
    }

    .user-info-box {
      color: #000000;

      .user-name {
        font-size: var(--desc-fz--default);
        font-weight: bolder;
        margin-bottom: 12px;
      }

      .customer-evaluation-icon {
        width: 127px;
        margin-bottom: 22px;
      }

      .date {
        font-size:var(--desc-fz--small);
      }
    }
  }

  .desc {
    width: 700px;
    font-size:var(--desc-fz--default);;
    line-height:30px;
    color: #000000;
  }
}
</style>
