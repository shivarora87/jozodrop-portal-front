import { resolve, dirname } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import LoadScriptPlugin from './plugins/vite-plugin-vue-loadScript.js'


// https://vitejs.dev/config/
export default ({command})=>defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/views/**/*.vue')
    }),
    LoadScriptPlugin(command==='build')
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
    }
  },
  server: {
    host:true,
    proxy: {
      '/api': {
        target:'http://xxx.com',
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
