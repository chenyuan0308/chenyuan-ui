<template>
  <div class="btn">
    <cy-button label="默认按钮" @click="onclick" />
  </div>
  <cy-button label="自定义样式" customerClass="my-custom-class" />
</template>

<script setup lang="ts">
  const onclick = () => {
    console.log('click');
  }
</script>

<style lang="scss" scoped>
.btn {
  width: 200px;
  margin-bottom: 20px;
}

.my-custom-class {
  width: 400px;
  color: red;
  border: 1px solid red !important;
}
</style>
