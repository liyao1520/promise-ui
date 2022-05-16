module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-typescript']
        ],
        plugins: ['@vue/babel-plugin-jsx']
      }
    ]
  },
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/style-mock.ts',
    '\\.(gif|ttf|eot|svg|jpg|png)$': '<rootDir>/__mocks__/file-mock.ts'
  },
  testEnvironment: 'jest-environment-jsdom' // 需要自己安装 jsdom 和 jest-environment-jsdom
}
