const t=`<template>
  <div class="button-list">
    <CYButton label="浅蓝背景" hover="#e6f7ff" />
    <CYButton label="浅绿背景" hover="#f0f9eb" />
    <CYButton label="浅红背景" hover="#fef0f0" />
    <CYButton label="渐变背景" hover="linear-gradient(to right, #e6f7ff, #f0f9eb)" />
  </div>
</template>

<style lang="scss" scoped>
.button-list {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}
</style>
`;export{t as default};
