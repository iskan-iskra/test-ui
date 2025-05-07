// eslint.config.cjs

import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginLit from 'eslint-plugin-lit';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.base.json'], // путь к tsconfig
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      unicorn: eslintPluginUnicorn,
      lit: eslintPluginLit,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
      ...eslintPluginLit.configs.recommended.rules,

      // Опциональные ослабления:
      'unicorn/filename-case': 'off',
    },
  },
  eslintConfigPrettier,
];
