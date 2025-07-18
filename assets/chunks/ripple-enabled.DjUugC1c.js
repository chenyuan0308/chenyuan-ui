const n=`<template>
  <div class="card-demo">
    <CYCard 
      title="水波动画" 
      :enableRipple="true"
    >
      <div class="card-content">
        <p>点击卡片任意位置，观察水波扩散效果。</p>
        <p>水波会从点击点扩散到卡片的四个角落。</p>
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
