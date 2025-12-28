import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  // 根据环境变量决定代理目标
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          // 代理所有API请求到真实后端或mock服务
        },
      },
    },
  };
});
