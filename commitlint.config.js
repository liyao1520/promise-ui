module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
// commit 的内容，只允许使用下面7个标识。

// feat: 新功能
// fix: 修补bug
// docs: 文档（documentation）
// style: 样式/格式（不影响代码运行的变动）
// refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
// test: 增加测试
// chore: 构建过程或辅助工具的变动
