const n=`<template>
  <div class="card-demo">
    <CYCard 
      title="禁用水波动画" 
      :enableRipple="false"
    >
      <div class="card-content">
        <p>这个卡片禁用了水波动画效果。</p>
        <p>点击卡片时不会有水波扩散。</p>
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
