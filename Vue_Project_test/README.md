## Vue Cli创建项目
    - 全局安装Vue Cli
        - npm install @vue/cli -g
    - 升级Vue Cli(升级到新版本)
        - npm update @vue/cli -g
    - 使用Vue的命令来创建项目
        - Vue create 项目名称
配置TS环境
    - npm install typescript -g
**通过命令 npm init vite@latest 可以直接创建一个vue3 + ts + vite的项目**

验证码的话使用npm install svg-captcha --save 来实现

## 解决vite项目跨域的问题
- 在vite.config.ts文件夹下配置
```
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
})
```
- 尤其是添加上
```
server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
```
- 在设立了target以后，地址是这个的可以使用/api直接调用处理