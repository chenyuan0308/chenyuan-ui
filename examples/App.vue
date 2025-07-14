<template>
  <div class="container">
    <h1>Chenyuan UI 组件展示</h1>

    <div class="demo-section">
      <h2>Button 按钮</h2>
      <MyButton>默认按钮</MyButton>
      <MyButton type="primary">主要按钮</MyButton>
      <MyButton disabled>禁用按钮</MyButton>
    </div>

    <div class="demo-section">
      <h2>Input 输入框</h2>
      <MyInput v-model="inputValue" placeholder="请输入内容" />
      <MyInput v-model="inputValue2" placeholder="可清空" clearable />
      <MyInput disabled placeholder="禁用状态" />
    </div>

    <div class="demo-section">
      <h2>IconText 图标文字</h2>
      <CYIconText el-icon="Edit" text="文字" icon-position="left" />
      <CYIconText el-icon="Check" text="文字" icon-position="right" />
    </div>
    <div class="demo-section">
      <h2>Eplie</h2>
      <CYEllipsis
        text="这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号这是一段很长的文本，会被省略显示，支持多行省略，当文本内容超过指定行数时会显示省略号数时会显示省略号"
        :lines="2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("");
const inputValue2 = ref("");
</script>

<style>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.demo-section > * {
  margin: 0 10px 10px 0;
}
</style>
