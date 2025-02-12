const n=`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'

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

// 获取路由和页面数据
const route = useRoute()
const { page } = useData()

// 处理点击导航项
const handle_click = (link: string) => {
  const target_id = decodeURIComponent(link.slice(1))
  const target_element = document.getElementById(target_id)
  if (target_element) {
    // 使用原生的滚动行为
    target_element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    // 调整偏移量
    setTimeout(() => {
      window.scrollBy({
        top: -100,
        behavior: 'smooth'
      })
    }, 0)
  }
}

// 更新激活的导航项
const update_active_nav = () => {
  const scroll_top = window.scrollY
  const nav_links = nav_items.value

  for (let i = nav_links.length - 1; i >= 0; i--) {
    const link = nav_links[i].link
    const target_id = decodeURIComponent(link.slice(1))
    const element = document.getElementById(target_id)
    
    if (element && element.offsetTop - 100 <= scroll_top) {
      active_link.value = link
      break
    }
  }
}

// 初始化导航项
const init_nav = () => {
  const headers = page.value.headers
  if (headers) {
    nav_items.value = headers
      .filter(header => header.level === 2 || header.level === 3)
      .map(header => ({
        title: header.title,
        link: \`#\${header.slug}\`,
        level: header.level
      }))
  }
}

// 监听滚动事件
onMounted(() => {
  init_nav()
  window.addEventListener('scroll', update_active_nav)
  // 初始化时检查一次当前位置
  update_active_nav()
})

onUnmounted(() => {
  window.removeEventListener('scroll', update_active_nav)
})

// 监听路由变化
watch(() => route.path, () => {
  init_nav()
  update_active_nav()
})
<\/script>

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
  background-color: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  padding: 8px 0;
  z-index: 10;
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
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.4;
  text-decoration: none;
  transition: color .3s;
}

.anchor-nav a:hover {
  color: var(--vp-c-brand);
}

.anchor-nav .active a {
  color: var(--vp-c-brand);
  border-right: 2px solid var(--vp-c-brand);
}

.anchor-nav .sub-item a {
  padding-left: 32px;
  font-size: 12px;
}
</style>
`;export{n as default};
