<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 导航项类型定义
interface NavItem {
  title: string
  link: string
  level: number
}

// 获取导航项列表
const nav_items = ref<NavItem[]>([])

// 当前激活的导航项
const active_link = ref('')

// 处理点击导航项
const handle_click = (link: string) => {
  // 移除开头的 #
  const target_id = link.slice(1)
  const target_element = document.getElementById(target_id)
  if (target_element) {
    target_element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 更新激活的导航项
const update_active_nav = () => {
  const scroll_top = window.scrollY
  const nav_links = nav_items.value

  for (let i = nav_links.length - 1; i >= 0; i--) {
    const link = nav_links[i].link
    const target_id = link.slice(1)
    const element = document.getElementById(target_id)
    
    if (element && element.offsetTop <= scroll_top + 100) {
      active_link.value = link
      break
    }
  }
}

// 初始化导航项
const init_nav = () => {
  const headers = Array.from(document.querySelectorAll('h2, h3'))
  console.log('headers', headers);
  
  nav_items.value = headers.map(header => ({
    title: header.textContent || '',
    link: `#${header.id}`,
    level: parseInt(header.tagName[1])
  }))
}

// 监听滚动事件
onMounted(() => {
  init_nav()
  window.addEventListener('scroll', update_active_nav)
})

onUnmounted(() => {
  window.removeEventListener('scroll', update_active_nav)
})
</script>

<template>
  <div class="anchor-nav">
    <ul>
      <li
        v-for="item in nav_items"
        :key="item.link"
        :class="{
          'active': active_link === item.link,
          'sub-item': item.level === 3
        }"
      >
        <a
          :href="item.link"
          @click.prevent="handle_click(item.link)"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.anchor-nav {
  position: fixed;
  top: 100px;
  right: 20px;
  width: 200px;
  background-color: #fff;
  border-left: 1px solid #ebedf0;
  padding: 8px 0;
}

.anchor-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.anchor-nav li {
  margin: 0;
  padding: 0;
}

.anchor-nav a {
  display: block;
  padding: 8px 24px 8px 16px;
  color: #455a64;
  font-size: 13px;
  line-height: 1.4;
  text-decoration: none;
  transition: color .3s;
}

.anchor-nav a:hover {
  color: #409eff;
}

.anchor-nav .active a {
  color: #409eff;
  border-right: 2px solid #409eff;
}

.anchor-nav .sub-item a {
  padding-left: 32px;
  font-size: 12px;
}
</style>
