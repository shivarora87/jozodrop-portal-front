<script setup>
import BlockTitle from '@/views/common/block-title.vue'
import Card from './card.vue'
</script>

<template>
  <div class="our-services-container">
    <div class="flex flex-horizontal-center">
      <BlockTitle label="OUR SERVICES" color="#ffffff" class="title" />
    </div>
    <div class="flex flex-horizontal-center">
      <Card>
        <template #title-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path
              d="M471.1 88.2l-162.7 64.7 366.2 155.6 175.8-69.8-124.9-49.6L471.1 88.2z m-215.8 85.6l-163.4 65 379.2 150.6 150.4-59.7-366.2-155.9zM64.2 271.6v463.1l386.5 202V425L64.2 271.6z m813.8 0l-183.1 72.6v148c0.2 10.7-9.6 20.5-20.3 20.5-10.7 0-20.5-9.8-20.3-20.5V360.6L491.4 425v511.7l186.9-97.5c-15.2-24.6-24.2-53.3-24.2-84.3 0-89.3 72.9-161.6 162.7-161.6 21.6 0 42.2 4.1 61 11.7V271.6h0.2z"
              fill="#409eff"></path>
            <path
              d="M959.3 751.4c0 75.7-61.3 137-137 137s-137-61.3-137-137c0.1-75.6 61.4-136.9 137-137 75.7-0.1 137 61.3 137 137z m-245.2-29.1c-5.1 19-5.1 39.1 0 58.1H763c-3-19.3-3-38.9 0-58.1h-48.9z m80.9-24.9h54.8c-6.3-17.9-15.5-34.6-27.3-49.5-11.8 14.8-21.1 31.6-27.5 49.5z m-6.6 24.9c-3.5 19.2-3.5 38.9 0 58.1h67.9c3.5-19.2 3.5-38.9 0-58.1h-67.9z m142.2 0h-49c3 19.3 3 38.9 0 58.1h48.9c5.1-19 5.1-39.1 0.1-58.1z m-81 83h-54.8c6.3 17.9 15.5 34.6 27.3 49.5 11.8-14.8 21.1-31.6 27.5-49.5z m-54.3 54.9c-11.7-16.8-20.7-35.3-26.6-54.8h-44.5c15 27.3 40.8 47.1 71.1 54.8z m125.2-54.9h-44.6c-5.9 19.6-14.9 38.1-26.6 54.8 30.3-7.5 56.1-27.4 71.2-54.8z m-71.2-162.7c11.7 16.8 20.6 35.3 26.6 54.8h44.6c-15.1-27.3-40.9-47.2-71.2-54.8z m-125.2 54.9h44.6c5.9-19.6 14.9-38.1 26.6-54.8-30.3 7.5-56.1 27.3-71.2 54.8z"
              fill="#409eff"></path>
          </svg>
        </template>
        <template #title-label>
          Global Order Fulfillment
        </template>
        <template #content>
          We fulfill orders directly to your customers in as fast as 5 to 8 days to most major markets, only using the
          most efficient fully tracked shipping lines.
        </template>
      </Card>
      <Card>
        <template #title-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon" fill="#409eff">
            <path
              d="M663.93 778.45l-173.67 90.53V513.64l308.36-157.12v167.72h58.73v-178c0-44.05-24.96-85.16-63.14-104.25L515.22 98.08c-33.77-17.62-74.89-17.62-108.66 0L127.57 243.45c-38.17 17.63-63.14 58.74-63.14 102.79v327.45c0 44.05 24.96 83.69 63.14 104.25l280.46 145.37c16.15 8.81 35.24 13.21 54.33 13.21 19.09 0 36.71-4.4 54.33-13.21l178.88-92.57-31.64-52.29z m-233.88 89.06L155.47 725.08c-20.56-10.28-32.3-30.83-32.3-52.86v-315.7l117.47 60.2v132.15c0 11.75 5.87 22.03 16.15 26.43l20.56 10.28c1.46 1.47 4.4 1.47 5.87 1.47 8.81 0 14.68-5.87 14.68-14.68V446.09l132.15 67.55v353.87z m30.84-403.8L143.72 302.19c2.94-2.94 7.34-5.87 11.74-7.34l278.99-145.37c8.81-4.41 17.62-7.34 26.43-7.34 8.81 0 19.08 1.47 26.43 5.87l278.99 143.9c4.41 1.47 7.34 4.41 11.74 7.34L460.89 463.71z"></path>
            <path d="M857.5 590.14l-35.55-0.1H798.8v256.4h58.58"></path>
            <path d="M700.04 688.9l-0.09 35.54v23.15h256.4v-58.58"></path>
          </svg>
        </template>
        <template #title-label>
          Product Procurement
        </template>
        <template #content>
          JOZO has partnerships with over <span style="color: #f59a23">15000+ premium suppliers</span>, covering <span
          style="color: #f59a23">900+ product categories</span>, offering a diverse selection of products to meet
          various needs. There are no minimum order quantities or wholesale requirements, only popular products with
          high quality and low cost to boost your sales and fulfill your diverse demands.
        </template>
      </Card>
      <Card>
        <template #title-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon" fill="#409eff">
            <path
              d="M512.8 142.4L768 325.6V832H256V325.6l256.8-183.2m0-71.2c-6.4 0-12.8 1.6-18.4 5.6L104 355.2c-12.8 8.8-6.4 28.8 9.6 28.8H192v496c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V384h78.4c15.2 0 21.6-20 9.6-28.8L531.2 77.6c-5.6-4-12-6.4-18.4-6.4zM640 448H384v64h256v-64z m0 128H384v64h256v-64z m0 128H384v64h256v-64z"></path>
          </svg>
        </template>
        <template #title-label>
          China Warehousing
        </template>
        <template #content>
          JOZO's warehouses are conveniently located in Shenzhen and Yiwu, and can reach any factory in China within a
          few days, with access to the best transportation routes
        </template>
      </Card>
      <Card>
        <template #title-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon" fill="#409eff">
            <path
              d="M389.9136 51.2 153.6 51.2 0 332.8l281.6 0L389.9136 51.2zM1024 332.8 870.4 51.2l-236.288 0L742.4 332.8 1024 332.8zM691.2 332.8 582.912 51.2l-141.7984 0L332.8 332.8 691.2 332.8zM590.7712 903.8848 1024 384 742.4 384 590.7712 903.8848zM0 384l433.2288 519.8848L281.6 384 0 384zM332.8 384l179.2 614.4 179.2-614.4L332.8 384z"></path>
          </svg>
        </template>
        <template #title-label>
          BRAND CUSTOMIZATION SERVICE
        </template>
        <template #content>
          JOZO can provide customized services such as logos, cards, packaging and shipping to enhance your user
          experience. Secondly, these personalized services, products and suggestions will help you build your brand and
          attract more loyal customers.
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-services-container {
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: #409eff;
  color: #ffffff;

  .icon {
    height: 80px;
  }

  .title {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 1200px) {
  .our-services-container {

  }
}
</style>
