<script setup>
import LayoutHeader from '@/components/Layout-Header/index.vue'
import LayoutFooter from '@/components/Layout-Footer/index.vue'
import Float from '@/components/Layout-Float/index.vue'
</script>

<template>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <Float />
</template>

<style scoped lang="scss"></style>
