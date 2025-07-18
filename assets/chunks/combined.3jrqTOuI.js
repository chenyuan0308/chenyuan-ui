const n=`<template>
  <div class="card-demo">
    <div class="card-list">
      <CYCard 
        title="完整功能卡片" 
        :enable3d="true"
        :maxRotateAngle="3"
        :enableRipple="true"
        :shadow="true"
      >
        <div class="card-content">
          <p>这个卡片启用了所有功能：</p>
          <ul>
            <li>3D 倾斜效果</li>
            <li>水波动画</li>
            <li>阴影效果</li>
          </ul>
        </div>
      </CYCard>
      
      <CYCard 
        title="简约风格卡片" 
        :enable3d="false"
        :enableRipple="false"
        :bordered="false"
      >
        <div class="card-content">
          <p>这个卡片禁用了所有动画效果：</p>
          <ul>
            <li>无 3D 倾斜</li>
            <li>无水波动画</li>
            <li>无边框</li>
          </ul>
        </div>
      </CYCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件会自动导入
<\/script>

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
    margin: 0 0 12px 0;
    color: #666;
    line-height: 1.6;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    color: #666;
    line-height: 1.6;
    
    li {
      margin-bottom: 4px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style> `;export{n as default};
