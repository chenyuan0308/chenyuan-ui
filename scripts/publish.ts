import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'

// 读取 package.json
const package_path = resolve(__dirname, '../package.json')
const package_json = JSON.parse(readFileSync(package_path, 'utf-8'))

// 获取当前版本
const current_version = package_json.version
const version_parts = current_version.split('.')
const patch = parseInt(version_parts[2] || '0')

// 更新补丁版本号
version_parts[2] = (patch + 1).toString()
const new_version = version_parts.join('.')

// 更新 package.json
package_json.version = new_version
writeFileSync(package_path, JSON.stringify(package_json, null, 2) + '\n')

// 提交更改
try {
  // 先构建
  console.log('\n📦 Building package...')
  execSync('pnpm build', { stdio: 'inherit' })

  // 更新版本并提交
  console.log('\n📝 Updating version...')
  execSync('git add package.json', { stdio: 'inherit' })
  execSync(`git commit -m "chore: release v${new_version}"`, { stdio: 'inherit' })
  execSync(`git tag v${new_version}`, { stdio: 'inherit' })
  
  // 发布到 npm
  console.log('\n🚀 Publishing to npm...')
  execSync('pnpm publish --no-git-checks', { stdio: 'inherit' })
  
  // 推送到远程仓库
  console.log('\n📤 Pushing to remote...')
  execSync('git push', { stdio: 'inherit' })
  execSync('git push --tags', { stdio: 'inherit' })
  
  console.log(`\n✨ Successfully published version ${new_version}`)
} catch (error) {
  console.error('\n❌ Failed to publish:', error)
  process.exit(1)
}
