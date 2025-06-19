import { ref, computed } from 'vue'

const usePopover = () => {
  const isShowSubNav = ref(false)
  const $routerLink = ref()
  const popoverWidth = ref(0)
  const showPopover = () => {
    const { offsetWidth } = $routerLink.value.$el || $routerLink.value
    popoverWidth.value = offsetWidth
  }
  const _popoverStyle = computed(() => {
    return {
      padding: 0,
      minWidth: `${popoverWidth.value}px`,
      width: 'auto'
    }
  })

  return {
    isShowSubNav,
    $routerLink,
    _popoverStyle,
    showPopover
  }
}
export default usePopover
