import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'standard',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended', // Enables Prettier plugin and disables conflicting rules
	),
	{
		plugins: {
			prettier: prettierPlugin, // Add Prettier plugin
		},
		rules: {
			'prettier/prettier': 'error', // Treat Prettier violations as ESLint errors
		},
	},
];

export default eslintConfig;
