import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useActiveMenu = (props) => {
  const route = useRoute()
  const isMenuActive = computed(() => {
    if (!route.matched.length) {
      return false
    }
    return props.to === route.path || !!props.children.find(({ to }) => to === route.path)
  })
  return {
    isMenuActive
  }
}
export default useActiveMenu
