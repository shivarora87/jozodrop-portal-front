<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Autoplay, Navigation } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

const getAvatar = avatarName => new URL(`/src/assets/img/home/customer-platform-reviews/${avatarName}.jpg`, import.meta.url).href
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
  }
])
const onProgress = (swiper) => {
  for (let i = 0; i < swiper.slides.length; i++) {
    const slide = swiper.slides[i]
    const progress = slide.progress
    Object.assign(slide.style, {
      opacity: '',
      background: '',
      transform: '',
      filter: ''
    })
    Object.assign(slide.style, {
      transform: 'scale(' + (1 - Math.abs(progress) / 4) + ')'
    })
  }
}

const onSetTransition = (swiper, transition) => {
  for (let i = 0; i < swiper.slides.length; i++) {
    let slide = swiper.slides[i]
    Object.assign(slide.style, {
      transition
    })
  }
}


</script>

<template>
  <div class="customer-platform-reviews">
    <Swiper
      :autoplay="true"
      :loop="true"
      :slidesPerView="2"
      watchSlidesProgress
      centeredSlides
      :space-between="-50"
      :modules="[Autoplay]"
      @progress="onProgress"
      @setTransition="onSetTransition"
    >
      <SwiperSlide v-for="(item,index) in swiperRowList1" :key="index">
        <div class="user-info-wrap flex">
          <img :src="getAvatar(item.avatarName)" alt="" class="avatar-img">
          <div class="user-info-box flex flex-column">
            <div class="user-name">{{ item.userName }}</div>
            <img
              src="@/assets/img/service/advantage/reviews/customer-evaluation.png"
              alt=""
              class="customer-evaluation-icon"
            />
            <div class="date">{{ item.date }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.customer-platform-reviews {
  padding: 140px 0 40px;

  .user-info-wrap {
    margin-bottom: 8px;
    padding: 17px 34px;
    background: #ffffff;
    border-radius: 17px;
    box-shadow: 0 0 5px 1px rgba(0, 119, 240, 0.2);

    .avatar-img {
      width: 200px;
      align-self: flex-start;
      margin-right: 38px;
      border-radius: 10px;
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
        font-size: var(--desc-fz--small);
      }

      .desc {
        font-size: var(--desc-fz--default);;
        line-height: 30px;
        color: #000000;
      }
    }
  }

  .swiper-slide {
    filter: blur(2px);

    &.swiper-slide-active {
      filter: blur(0);
    }
  }
}


</style>
