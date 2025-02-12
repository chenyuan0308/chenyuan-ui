const n=`<template>
  <div class="button-list">
    <cy-button label="默认按钮" @click="onclick" />
    <cy-button label="带hover效果" hover="#e6f7ff" />
    <cy-button label="自定义样式" customerClass="custom-class" />
  </div>
</template>

<script setup lang="ts">
const onclick = () => {
  console.log('click');
}
<\/script>

<style lang="scss" scoped>
.button-list {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}

.custom-class {
  width: 200px;
  color: red;
  border: 1px solid red !important;
}
</style>
`;export{n as default};
