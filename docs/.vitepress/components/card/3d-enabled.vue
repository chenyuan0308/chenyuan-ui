<template>
  <div class="card-demo">
    <CYCard 
      title="3D 倾斜效果" 
      :enable3d="true"
      :maxRotateAngle="3"
    >
      <div class="card-content">
        <p>鼠标悬停时卡片会产生 3D 倾斜效果，倾斜角度为 3 度。</p>
        <p>移动鼠标到卡片的不同位置，观察倾斜方向的变化。</p>
      </div>
    </CYCard>
  </div>
</template>

<script setup lang="ts">
// 组件会自动导入
</script>

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
</style> 