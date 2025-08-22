module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        amd: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArray: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    ignorePatterns: [
        'node_modules/',
        'setup=-tests.ts',
        'jest.config.js',
        'prettierrrc.js',
        'react-app-scaffolder/',
        'marketplace-api-flightRouterStateSchema.ts',
        'platform-flightRouterStateSchema.ts',
        'packages/*/build',
        'packages/*/dist',
        'packages/*/public/dist',
        'chat-bot.js',
        'src/generated/prisma/**',
    ],
    rules: {
        qoutes: ['warn', 'single', { avoidEsscape: true, allowTemplateLiterals: false }],
        semi: ['warn', 'never'],
        '@typescript-eslint/no-unused-vars': [2, { args: 'none'}],
        '@typescript-eslint/no-unused-expressions': 'warn',
        'no-debugger': 'off',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'max-len': ['error', { 
            code: 120, 
            ignoreUrls: true, 
            ignoreTemplateLiterals: true, 
            ignoreStrings: true,
            ignoreComments: true 
        }],
        'no-confusing-arrow': ['error'],
        'no-mixed-operators': [
             {
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
            },
        ], 
        'no-tabs': ['error', { allowIndentation: true}], 
        'no-unexpected-multiline': 'error',
        // Disabling as conflicts with Prettier
        indent: 0,
        // Disabling as we are validating types with TypeScript not PropTypes
        'comma-dangle': 'off',
        'object-curly-spacing': 'off',
        'array-bracket-spacing': 'off',
        
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-children-prop': 'warn',
        'react/no-unescaped-entities': 'warn',
        'react/jsx-key': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-undef': 'warn',
        'react/no-deprecated': 'warn',
        
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        
        'prefer-const': 'warn',
        'no-var': 'warn',
        'no-duplicate-imports': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}