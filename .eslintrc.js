module.exports = {
  root: true,
  env: {
    browser: true,
    jest:true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard'
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'eol-last': ['error', 'always'],
    'no-console': 'warn',
    'prettier/prettier': 'error',
    // quotes: ["error", "single"],
    'semi': 2,
    'vue/html-quotes': ['warn', 'double'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ]
  },
  globals: {
    config: true,
    require: true
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      globals: {
        // Test Helpers from `test/jest.setup.js`
        mount: false,
        mountPreMocked: false,
        shallow: false,
        shallowPreMocked: false,
        routerPush: false,
        formHelpers: false,
        mockTransitions: false,

        // Default Jest Globals
        expect: true,
        mockFn: true,
        afterEach: true,
        beforeEach: true,
        describe: true,
        it: true,
        runs: true,
        waitsFor: true,
        xdescribe: true,
        xit: true
      }
    }
  ]
}
