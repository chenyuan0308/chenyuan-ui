const n=`<template>
  <div>
    <div class="button-list">
      <CYButton label="默认按钮" hover="#e6f0ff" />
      <CYButton label="小按钮" customerClass="small-btn" hover="#e6f0ff" />
      <CYButton label="大圆角" customerClass="round-btn" hover="#e6f0ff" />
      <CYButton label="迷你按钮" customerClass="mini-btn" hover="#e6f0ff" />
    </div>
  </div>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
.button-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

:deep(.small-btn) {
  --cy-btn-height: 36px;
  --cy-btn-padding: 6px 12px;
  --cy-btn-font-size: 12px;
}

:deep(.round-btn) {
  --cy-btn-height: 44px;
  --cy-btn-padding: 10px 24px;
  --cy-btn-border-radius: 22px;
}

:deep(.mini-btn) {
  --cy-btn-height: 28px;
  --cy-btn-padding: 4px 10px;
  --cy-btn-font-size: 12px;
  --cy-btn-border-radius: 2px;
}
</style>
`;export{n as default};
