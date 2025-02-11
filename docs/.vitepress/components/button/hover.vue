<template>
  <div class="button-list">
    <cy-button label="浅蓝背景" hover="#e6f7ff" />
    <cy-button label="浅绿背景" hover="#f0f9eb" />
    <cy-button label="浅红背景" hover="#fef0f0" />
    <cy-button label="渐变背景" hover="linear-gradient(to right, #e6f7ff, #f0f9eb)" />
  </div>
</template>

<style lang="scss" scoped>
.button-list {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}
</style>
