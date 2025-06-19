<script setup>
import CategoryList from '../components/category-list.vue'
import QuestionList from '../components/question-list.vue'
import { useFetchData } from '@/views/faq/hooks/useFetchData'
useFetchData()
</script>

<template>
  <div class="content-container ">
    <div class="content-wrap flex flex-horizontal-center">
      <CategoryList />
      <QuestionList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  .content-wrap{
    gap: 14px;
  }
}
</style>
