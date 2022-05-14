import { typesFileName, coreRealName, coreName } from './utils'
export default function genIndexTemplate(info) {
  const { name, category, title } = info
  return `\
import type { App } from 'vue';
import ${coreName(name)} from './src/${coreRealName(name)}';

export * from './src/${typesFileName(name)}';

export { ${coreName(name)} };

export default {
  title: '${coreName(name)} ${title}',
  category: '${category}',
  status: '100%',
  install(app: App): void {
    app.component(${coreName(name)}.name, ${coreName(name)});
  },
};
  `
}
