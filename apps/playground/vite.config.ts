import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      'ui-lib': path.resolve(__dirname, '../../packages/ui-lib'),
    },
  },
});
