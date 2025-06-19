import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLang } from '@hooks/useStorage'

const langMap = {
  en: 'English',
  vn: 'Vietnamese'
}

const useI18nLang = () => {
  const localeInstance = useI18n({useScope: 'local'})
  const globalInstance = useI18n({ useScope: 'global' })

  const langList = computed(() => {
    return globalInstance.availableLocales.map((lang) => ({
      label: langMap[lang],
      value: lang
    }))
  })

  const {locale:globalLocale} = globalInstance

  const { t } = localeInstance

  const {t:gt} = globalInstance

  const localeLabel = computed(() => langMap[globalLocale.value])

  const langModel = computed({
    get(){
      return globalLocale.value
    },
    set(v){
      globalLocale.value  = v
      setLang(v)
    }
  })

  return {
    t,
    gt,
    langModel,
    localeLabel,
    langList,
  }
}


export { useI18nLang }
