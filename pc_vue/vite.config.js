import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'
import { createVuePlugin as vue } from "vite-plugin-vue2";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/styles/variables.sass"', // 全局scss
      },
      scss: {
        additionalData: '@import "@/styles/variables.scss";', // 全局scss
      },
    },
  },
  server: {
    proxy:{
      '/api': {
        target:'http://localhost:7001', // 反向代理
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    open: true, // 自动打开浏览器
  },
})
