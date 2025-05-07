import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'MyUiLib',
      formats: ['es', 'umd'],

      fileName: 'my-ui-lib',
    },
    outDir: 'dist', // Указываем папку, куда будут собираться файлы
    rollupOptions: {
      external: ['lit'],
    },
  },
});
