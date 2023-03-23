import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const resolve = (dir) => path.resolve(__dirname, dir);
export default defineConfig({
  publicDir: resolve("public"), //静态资源文件夹
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 反向代理
  server: {
    host: "0.0.0.0", //服务器ip地址
    port: 5566, //本地端口
    fs: {
      strict: false, //  支持引用除入口目录的文件
    },
    open: false, // 是否自动在浏览器打开
    proxy: {
      "/szapi": {
        target: "https://tradesz.test.api.qywgpo.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/szapi/, ""),
      },
    },
  },
  build: {
    //打包环境移除console.log，debugger
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    //打包文件按照类型分文件夹显示
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
