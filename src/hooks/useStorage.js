import { useStorage } from '@vueuse/core'

const lang = useStorage('lang', 'en')

const getLang = () => lang.value

const setLang = (v) => (lang.value = v)

export { getLang, setLang}
