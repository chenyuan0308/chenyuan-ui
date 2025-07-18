const n=`<template>
  <div class="card-demo">
    <CYCard 
      title="禁用 3D 效果" 
      :enable3d="false"
    >
      <div class="card-content">
        <p>这个卡片禁用了 3D 倾斜效果。</p>
        <p>鼠标悬停时不会有倾斜动画。</p>
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
