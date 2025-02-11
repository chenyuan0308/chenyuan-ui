<template>
  <MyButton>默认按钮</MyButton>
  <MyButton type="primary">{{ value }}</MyButton>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const value = ref("主要按钮");
</script>
