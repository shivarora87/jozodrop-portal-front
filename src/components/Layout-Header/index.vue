<script setup>
import PcHeader from './components/pc/index.vue'
import MobileHeader from './components/mobile/index.vue'
</script>

<template>
  <PcHeader class="pc-header" />
  <MobileHeader class="mobile-header" />
</template>

<style scoped lang="scss">
.mobile-header {
  display: none;
}

@media screen and (max-width: 1200px) {
  .pc-header {
    display: none;
  }
  .mobile-header {
    display: flex;
  }
}
</style>
