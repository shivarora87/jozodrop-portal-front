<script setup>
import {ref} from 'vue'
import {useI18nLang} from '@hooks'
import NavButton from './nav-button.vue'

const {langModel,langList,localeLabel} = useI18nLang()

const changeLangButtonConfig =ref( {
  label: localeLabel,
  to: undefined,
  isLink:false,
  isNeedTranslate:false,
  children:langList.value.map(item=>({...item,to:'',isNeedTranslate:false}))
})

</script>

<template>
  <NavButton v-bind="changeLangButtonConfig" @sub-nav-item-click="langModel=$event.value"/>
</template>

<style scoped lang="scss">

</style>
