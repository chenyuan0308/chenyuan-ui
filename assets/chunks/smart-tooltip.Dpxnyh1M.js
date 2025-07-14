const t=`<template>
  <div>
    <!-- 文本被省略时会显示 tooltip -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
      <h4>长文本（会显示 tooltip）：</h4>
      <CYEllipsis text="这是一段很长的文本，会被省略显示，当文本被省略时会显示 tooltip" />
    </div>
    
    <!-- 文本未被省略时不会显示 tooltip -->
    <div style="width: 500px; border: 1px solid #ccc; padding: 10px;">
      <h4>短文本（不会显示 tooltip）：</h4>
      <CYEllipsis text="短文本" />
    </div>
  </div>
</template>

<style scoped>
h4 {
  margin: 0 0 5px 0;
  font-size: 12px;
  color: #666;
}
</style> `;export{t as default};
