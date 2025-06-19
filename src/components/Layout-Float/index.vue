<script setup>
import { ElBacktop } from 'element-plus'
import 'element-plus/es/components/backtop/style/css'
</script>

<template>
  <el-backtop :right="0" :bottom="178" style="width: auto; background-color: transparent">
    <img src="@/assets/img/global/float/back-top-icon.png" alt="" class="backtotop-img" />
  </el-backtop>
  <div class="ai">
    <img src="@/assets/img/global/float/ai-icon.png" alt="" class="ai-img" />
  </div>
</template>

<style scoped lang="scss">
.ai {
  position: fixed;
  right: 0;
  bottom: 114px;
  cursor: pointer;
}
</style>
