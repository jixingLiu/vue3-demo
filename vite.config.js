import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


import path from 'path'
function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(import.meta, 'process')

// https://vitejs.dev/config/
export default ({command, mode}) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  console.log(command, mode, 'command, mode')
  return {
    plugins: [
      vue(),
      vueJsx()
    ],
    server: {
      port: 8888,
      proxy: {
        // 正则表达式写法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, '')
        }
      }
    },
    resolve: {
      alias: {
        "@": resolve('/src'),
        open: true,
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          // 配置ant的主题
          modifyVars: {
            'primary-color': '#4C28D0',
            'link-color': '#4C28D0'
          },
          javascriptEnabled: true
        }
      }
    },
    optimizeDeps: {
      include: ['lodash-es'],
    },
  }
}
