// 获取组件源代码
export const getSourceCode = async (component_name: string): Promise<string> => {
  try {
    // 动态导入组件源代码
    const module = await import(`../components/${component_name}.vue?raw`)
    return module.default
  } catch (err) {
    console.error('加载组件源代码失败：', err)
    return ''
  }
}
