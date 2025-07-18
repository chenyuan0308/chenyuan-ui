const n=`<template>
  <div class="card-demo">
    <CYCard title="基础卡片">
      <div class="card-content">
        <p>这是一个基础的卡片组件，包含标题、内容和底部区域。</p>
      </div>
      <template #footer>
        <div class="card-footer">
          <span>底部内容</span>
        </div>
      </template>
    </CYCard>
  </div>
</template>

<script setup lang="ts">
// 组件会自动导入
<\/script>

<style lang="scss" scoped>
.card-demo {
  width: 300px;
}

.card-content {
  padding: 16px 0;
  
  p {
    margin: 0;
    color: #666;
    line-height: 1.6;
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 14px;
}
</style> `;export{n as default};
