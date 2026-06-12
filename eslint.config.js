import js from '@eslint/js';
export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                console: 'readonly',
                module: 'writable',
                process: 'readonly',
                require: 'readonly',
            },
            ecmaVersion: 2024,
            sourceType: 'module',
        },
    }
];