<script setup>
import Banner from './block/banner.vue'
import HowLogistics from './block/how-logistics.vue'
import PlatformSalesData3 from './block/platform-sales-data-3.vue'
import Platforms from './block/platforms.vue'
import GlobalMarkets from './block/global-markets.vue'
import Step from '@/views/aboutUs/jozo/components/step.vue'
import OurServices from './block/our-services.vue'
import Affiliates from './block/affiliates.vue'
import JozoTour from './block/jozo-tour.vue'
import Vision from './block/vision.vue'
import CustomerPlatformReviews from './block/customer-platform-reviews.vue'
import PartnerLogo from './block/partner-logo.vue'
</script>

<template>
  <div class="index-container">
    <Banner />
    <HowLogistics/>
    <PlatformSalesData3/>
    <GlobalMarkets/>
    <Step style="padding:70px 0"/>
    <OurServices/>
    <Affiliates/>
    <Platforms/>
    <JozoTour/>
    <Vision/>
    <CustomerPlatformReviews/>
    <PartnerLogo />
  </div>
</template>

<style scoped lang="scss"></style>
