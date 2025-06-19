<script setup>
import { ref, computed } from 'vue'
import Tabs from './components/tabs.vue'
import Shopify from './shopify/index.vue'
import Woocommerce from './woocommerce/index.vue'

const tabModel = ref('shopify')
const component = computed(() => ({ shopify: Shopify, woocommerce: Woocommerce })[tabModel.value])
</script>

<template>
  <div class="integrations-container">
    <Tabs v-model="tabModel" />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="component" />
      </keep-alive>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
