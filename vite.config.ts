import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^@\//,
        replacement: path.join(process.cwd(), './src') + '/',
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    open: true
  },
  plugins: [vue()]
})
