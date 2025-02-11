<template>
  <cy-button label="禁用按钮" disabled />
  <div style="margin-bottom: 20px;"/>
  <cy-button label="禁用带图标" disabled :icon="loop" />
</template>

<script setup lang="ts">
import loop from '../../../../src/assets/icon/loop.svg'
</script>

<style lang="scss" scoped>
:deep() {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>