import { ref, provide, onMounted, watchEffect } from 'vue'
import useFetch from '@/utils/useFetch'

const symbolCategoryList = Symbol('category-list')
const symbolQuestionList = Symbol('question-list')
const symbolActiveCategory = Symbol('active-category')

const useFetchData = () => {
  const categoryList = ref([])
  const questionList = ref([])
  const activeCategory = ref()

  provide(symbolCategoryList, categoryList)
  provide(symbolQuestionList, questionList)
  provide(symbolActiveCategory, activeCategory)
  watchEffect(async () => {
    const { value: activeCategoryValue } = activeCategory
    if (!activeCategoryValue || !activeCategoryValue.dictValue) {
      return
    }
    questionList.value = await useFetch(
      `/portal/getFaqByCategory?category=${activeCategoryValue.dictValue}`
    )
  })

  onMounted(async () => {
    categoryList.value = (await useFetch('/portal/faqCategory')) || []
    activeCategory.value = categoryList.value?.[0]
  })
}

export { symbolCategoryList, symbolQuestionList, symbolActiveCategory, useFetchData }
