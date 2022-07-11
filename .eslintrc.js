module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'error',
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'n/handle-callback-err': 'off',
    semi: [2, 'always'],
    'vue/multi-word-component-names': 'off',
    'array-callback-return': 'off',
    'no-unused-vars': 'warn',
    'brace-style': ['error', 'stroustrup']
  }
};
