<template>
  <div class="card-demo">
    <div class="card-list">
      <CYCard 
        title="小角度倾斜" 
        :enable3d="true"
        :maxRotateAngle="1"
      >
        <div class="card-content">
          <p>倾斜角度：1 度</p>
          <p>效果较为轻微</p>
        </div>
      </CYCard>
      
      <CYCard 
        title="中等角度倾斜" 
        :enable3d="true"
        :maxRotateAngle="5"
      >
        <div class="card-content">
          <p>倾斜角度：5 度</p>
          <p>效果适中</p>
        </div>
      </CYCard>
      
      <CYCard 
        title="大角度倾斜" 
        :enable3d="true"
        :maxRotateAngle="10"
      >
        <div class="card-content">
          <p>倾斜角度：10 度</p>
          <p>效果明显</p>
        </div>
      </CYCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件会自动导入
</script>

<style lang="scss" scoped>
.card-demo {
  width: 100%;
}

.card-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card-list > * {
  width: 280px;
}

.card-content {
  padding: 16px 0;
  
  p {
    margin: 0 0 8px 0;
    color: #666;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style> 