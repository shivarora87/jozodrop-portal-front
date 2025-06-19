<script setup>
import Banner from './block/banner.vue'
import Subsequent from './block/subsequent.vue'
import Advantage from './block/advantage.vue'
import Process from './block/process.vue'
// import Reviews from './block/reviews.vue'
import PlatformSalesData1 from '@/views/home/block/platform-sales-data-1.vue'
// import PlatformSalesData2 from '@/views/home/block/platform-sales-data-2.vue'
</script>

<template>
  <div class="service-container">
    <Banner />
    <Subsequent />
    <Advantage />
    <Process />
    <!--<Reviews />-->
    <!--<PlatformSalesData2/>-->
    <PlatformSalesData1/>
  </div>
</template>

<style scoped lang="scss">
.service-container {
}
</style>
