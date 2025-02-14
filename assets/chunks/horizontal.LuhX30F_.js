const n=`<template>
  <CYSplitpanes horizontal class="splitpanes-demo">
    <CYPane>
      <div class="pane-content">上方面板</div>
    </CYPane>
    <CYPane>
      <div class="pane-content">下方面板</div>
    </CYPane>
  </CYSplitpanes>
</template>

<style scoped>
.splitpanes-demo {
  height: 400px;
}

.pane-content {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: var(--el-bg-color-page);
}
</style>
`;export{n as default};
