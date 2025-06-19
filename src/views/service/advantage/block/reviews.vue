<script setup>
import { ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import BlockTitle from '@/views/common/block-title.vue'
import SwiperItem from '../components/swiper-item.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()

const swiperRowList1 = ref([
  {
    avatarName: 'avatar-1',
    userName: 'Matheus Soyer',
    date: 'March 30th, 2024',
    desc: 'I have been working with Jozodrop for some time now, and for me, it has been an excellent experience, especially thanks to the outstanding support provided by Jozodrop! This support has not only given me great peace of mind in my business operations but has also become a key turning point in the development of my business. Jozodrop is able to customize products and packaging according to my needs, and through professional supply chain management, they successfully acquire all products at highly competitive discount prices. This efficient and flexible approach to cooperation has not only made me extremely satisfied but has also helped me stand out in the market. So far, there is absolutely nothing to complain about—everything has gone very smoothly!'
  },
  {
    avatarName: 'avatar-2',
    userName: 'Kaique Lopes',
    date: 'April 8th, 2024',
    desc: 'I have been engaged in content creation and sales for some time now, and during this process, many people have tried to probe into the products I sell. However, they are the only company that can fully guarantee the confidentiality of all my products and business secrets. In this information-driven age, having such protection, along with their high regard for privacy and professionalism, truly gives me peace of mind. This has earned my trust, which is why I confidently and unreservedly recommend them to you. By working with them, you can completely rely on their expertise and integrity. If you are also looking for a trustworthy partner, they are undoubtedly a reliable choice.'
  },
  {
    avatarName: 'avatar-3',
    userName: 'Maurício Brollo',
    date: 'August 30th, 2023',
    desc: 'In my collaboration with them, I can fully ensure that the quality of my products is strictly controlled. Whenever there is an issue with a product, their detailed video inspection service allows me to clearly understand the problem and resolve it in a timely manner. What’s more, their communication efficiency and professionalism are outstanding. Whether it\'s product details, logistics progress, or any questions I have, their responses are always swift and accurate. Thanks to these advantages, I am able to expand my business without any concerns. Moreover, due to their secure and fast processing systems, I have completely avoided the risk of payment blocks, allowing me to steadily advance my business growth.'
  },
  {
    avatarName: 'avatar-4',
    userName: 'Everton Stedile',
    date: 'December 21th, 2023',
    desc: 'The biggest difference in working with them, without a doubt, is their outstanding customer service. Every manager is able to communicate in my native language, which makes the experience feel much more personal and convenient. What\'s more, their team is always ready to provide support, whether it’s for product inquiries, order processing, or any other issues. They respond quickly and offer solutions efficiently. This seamless service experience has made me feel very comfortable and trustworthy, which is why I have become a loyal customer. No matter the issue, I always feel their genuine care for their clients, and this kind of experience is truly priceless.'
  },
  {
    avatarName: 'avatar-5',
    userName: 'Daniel Melkzedk',
    date: 'October 2th, 2023',
    desc: 'I have been working with Jozodrop to handle orders for a long time, and during this period, Jozodrop has consistently provided me with extremely smooth and professional service. Whether it’s for regular orders or custom requirements, Jozodrop responds quickly and ensures that every step is carried out accurately and without issue. From product selection and customization requests to shipping and tracking, the entire process is efficient and transparent, never causing me any hassle or concern. The Jozodrop team is always able to resolve any issues in a timely manner, which allows me to go through the entire order process without any pressure. I can focus on other aspects of my business with peace of mind, knowing that Jozodrop will provide the highest quality support.'
  },
  {
    avatarName: 'avatar-6',
    userName: 'Leonardo Collet',
    date: 'October 2th, 2023',
    desc: 'The integration process on the Jozodrop platform is very simple and intuitive, allowing me to quickly get started and begin using it. What’s even more satisfying is that the support services provided by Jozodrop are excellent. Whether it’s a technical issue or a business inquiry, their response time is extremely fast, and their solutions are highly effective. In addition, Jozodrop places great emphasis on product quality, with each batch of goods being strictly controlled. The negotiation process with Jozodrop is also very smooth, with highly efficient communication. These high-quality services have enabled me to focus on business expansion and greatly enhanced my brand image. I have already recommended Jozodrop to many friends, because a high-quality supplier is crucial for brand development.'
  },
])
// const swiperRowList2 = ref([
//   {
//     avatarName: 'avatar-6',
//     userName: 'Michael',
//     date: 'February 15th, 2024',
//     desc: '"The team at Jozodrop is incredibly responsive. Whenever I have an issue, it\'s resolved promptly. That\'s invaluable to me."'
//   },
//   {
//     avatarName: 'avatar-7',
//     userName: 'Anna',
//     date: 'January 26th, 2024',
//     desc: '"Since partnering with Jozodrop, my customers have noticed a significant improvement in service quality. All thanks to Jozodrop!"'
//   },
//   {
//     avatarName: 'avatar-8',
//     userName: 'Kevin',
//     date: 'November 18th, 2023',
//     desc: '"Jozodrop\'s order processing speed is second to none. It\'s a relief not to have to worry about inventory and shipping. They\'ve made my business so much easier."'
//   },
//   {
//     avatarName: 'avatar-9',
//     userName: 'Jessica',
//     date: 'October 6th, 2023',
//     desc: '"I\'m extremely satisfied with Jozodrop\'s after-sales service. They\'re always eager to assist and provide effective solutions."'
//   },
//   {
//     avatarName: 'avatar-10',
//     userName: 'Daniel',
//     date: 'April 18th, 2024',
//     desc: '"Jozodrop\'s fulfillment service is nothing short of professional. Their team ensures every order is delivered on time and accurately."'
//   }
// ])
</script>

<template>
  <div class="reviews-container flex flex-column flex-vertical-center">
    <BlockTitle :label="t('t1')" color="#0077f0" class="block-title" />
    <div class="swiper-wrap flex flex-column">
      <Vue3Marquee clone gradient pauseOnHover>
        <SwiperItem v-for="(item, index) in swiperRowList1" :key="index" v-bind="item" />
      </Vue3Marquee>
      <!--<Vue3Marquee clone gradient pauseOnHover>-->
      <!--  <SwiperItem v-for="(item, index) in swiperRowList2" :key="index" v-bind="item" />-->
      <!--</Vue3Marquee>-->
    </div>
    <div class="bottom-line flex flex-horizontal-center"></div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/px2vw.scss';

.reviews-container {
  padding: 120px 0 55px;
  background: #f1f7ff;
  border-top-left-radius: 100px;

  .block-title {
    margin-bottom: 70px;
  }

  .swiper-wrap {
    width: 100%;
    margin-bottom: 68px;
    gap: 50px;
    padding: 10px 0;
    overflow: hidden;

    :deep(.vue3-marquee) {
      .marquee {
        align-items: stretch !important;
      }
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
      background: url('@/assets/img/service/advantage/reviews/footer-line.png') center center / 100% 100% no-repeat;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "CUSTOMER PLATFORM REVIEWS"
  },
  "vn": {
    "t1": "Đánh giá nền tảng khách hàng"
  }
}
</i18n>
