import { ref, computed, onMounted, onUnmounted } from 'vue'

const useScroll = () => {
  const scrollTop = ref(0)
  const className = computed(() => (scrollTop.value >= 50 ? 'isOnscroll' : ''))
  const scrollBack = () => {
    scrollTop.value = window.scrollY
  }
  onMounted(() => {
    window.document.addEventListener('scroll', scrollBack, { passive: true })
  })
  onUnmounted(() => {
    window.document.removeEventListener('scroll', scrollBack)
  })
  return className
}
export default useScroll
