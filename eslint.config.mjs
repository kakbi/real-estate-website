const config = [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'warn',
            eqeqeq: 'error',
        },
    },
];

export default config;
