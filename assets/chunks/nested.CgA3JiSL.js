const n=`<template>
  <CYSplitpanes class="default-theme" style="height: 400px">
    <CYPane>
      <div class="pane-content">左侧面板</div>
    </CYPane>
    <CYPane>
      <CYSplitpanes horizontal>
        <CYPane>
          <div class="pane-content">右上面板</div>
        </CYPane>
        <CYPane>
          <div class="pane-content">右下面板</div>
        </CYPane>
      </CYSplitpanes>
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
