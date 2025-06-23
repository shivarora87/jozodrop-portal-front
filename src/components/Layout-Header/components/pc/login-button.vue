<script setup>
import PermissionButton from './login-registration.vue'
import {useI18nLang} from '@hooks'

const {t} = useI18nLang()
const jump = ()=>{
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScZAeopvYqkktuMI-ZZi1VnRqyQKNOvJqsUK-RSR-Z-LEjH_w/viewform?usp=dialog','_blank')
}
</script>

<template>
  <PermissionButton class="permission-button" @click="jump">
    <span class="login-label">{{t('t1')}}</span>
  </PermissionButton>
</template>

<style scoped lang="scss">
.permission-button {
  background: #eceaea;

  .login-label {
    transition: color 300ms ease-out;
  }

  &:hover {
    color: #ffffff;
  }
}
</style>
<i18n>
{
  "en": {
    "t1": "Contact US"
  },
  "vn": {
    "t1": "Đăng nhập"
  }
}
</i18n>
