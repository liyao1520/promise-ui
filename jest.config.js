module.exports = {
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@vue/babel-plugin-jsx"], // 新增
      },
    ],
  },
  testEnvironment: "jest-environment-jsdom", // 需要自己安装 jsdom 和 jest-environment-jsdom
};
