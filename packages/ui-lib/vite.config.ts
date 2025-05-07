import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'MyUiLib',
      formats: ['es', 'umd'],
      fileName: 'my-ui-lib',
    },
    rollupOptions: {
      external: ['lit'], // Внешний зависимый модуль (lit)
      output: {
        globals: {
          lit: 'lit', // Указываем, что будет использован глобальный `lit`
        },
      },
    },
    sourcemap: true,
  },
});
