import { defineConfig } from 'vite'
import vue from '@vuejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 80,
  },
});
