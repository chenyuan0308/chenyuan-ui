const n=`<template>
  <div class="card-demo">
    <CYCard 
      title="带阴影的卡片" 
      :shadow="true"
    >
      <div class="card-content">
        <p>这个卡片启用了阴影效果。</p>
        <p>悬停时阴影会加深，增强立体感。</p>
      </div>
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
    margin: 0 0 12px 0;
    color: #666;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style> `;export{n as default};
