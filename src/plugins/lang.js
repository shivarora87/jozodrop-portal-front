import { createI18n } from 'vue-i18n'
import { getLang } from '@hooks/useStorage'
import vn from '@/lang/vn.js'
import en from '@/lang/en.js'

const i18n = createI18n({
  locale: getLang(),
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    vn
  }
})


const pluginLang= {
  install(app) {
    app.use(i18n)
  }
}

export {pluginLang, i18n }
