const n=`<template>
  <CYSplitpanes class="default-theme" style="height: 400px">
    <CYPane>
      <div class="pane-content">左侧面板</div>
    </CYPane>
    <CYPane>
      <div class="pane-content">右侧面板</div>
    </CYPane>
  </CYSplitpanes>
</template>


<style scoped>
.pane-content {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: var(--el-bg-color-page);
}
</style>
`;export{n as default};
