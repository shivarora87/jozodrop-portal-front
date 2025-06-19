<script setup>
import PermissionButton from './login-registration.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
const jump = ()=>{
  window.open('xxx.com','_blank')
}
</script>

<template>
  <PermissionButton class="permission-button" @click="jump">
    <span style="color: #ffffff">{{ t('t1') }}</span>
  </PermissionButton>
</template>

<style scoped lang="scss">
.permission-button {
  background: #009bf0;
  white-space: nowrap;
}
</style>

<i18n>
{
  "en": {
    "t1": "Sign Up For Free"
  },
  "vn": {
    "t1": "Đăng ký miễn phí"
  }
}
</i18n>
