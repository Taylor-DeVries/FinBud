import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import checkFile from 'eslint-plugin-check-file';
import tseslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['**/.next/**', '**/out/**', '**/build/**', 'next-env.d.ts'],
  },
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'check-file': checkFile,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Enforce file names
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          errorMessage:
            'The file "{{ target }}" does not match the kebab-case naming convention',
        },
      ],
      // Enforce folder names
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': '?(_)+([a-z])*(-+([a-z0-9]))',
        },
        {
          errorMessage:
            'The folder "{{ target }}" does not match the kebab-case or _underscore-kebab-case naming convention',
        },
      ],
      // Enforce camelCase for variables
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: false,
          ignoreImports: false,
        },
      ],
      // TypeScript naming conventions
      '@typescript-eslint/naming-convention': [
        'error',
        // allow ALL_CAPS_WITH_UNDERSCORE for constants
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
      ],
    },
  },
];

export default eslintConfig;
