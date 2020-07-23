const fs = require('fs-extra'); // fs-extra是fs的一个扩展，并且继承了fs所有方法和为fs方法添加了promise的支持
const glob = require('fast-glob'); // 这个包提供了遍历文件系统和返回路径名的方法
const path = require('path');
const uppercamelize = require('uppercamelcase');  // 驼峰的转化
const Components = require('./get-components')(); // 筛选文件的操作
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version; // 优先使用环境变量中的版本号，没有就用packageJson中的版本号

const tips = `/* eslint-disable */
// 此文件由build/build-entry.js自动生成`;
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);

function buildEntry() {
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);// 批量导入
  const exportList = Components.map(name => `${uppercamelize(name)}`); // 批量导出列表 映射成驼峰
  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));// 过滤需要的安装文件  !~-1 true

  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${intallList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

function buildDemoEntry() {
  const dir = path.join(__dirname, '../packages');
  const demos = fs.readdirSync(dir)
    .filter(name => fs.existsSync(path.join(dir, `${name}/demo/index.vue`)))
    .map(name => `'${name}': () => wrapper(import('../../packages/${name}/demo'), '${name}')`);

  const content = `${tips}
import { wrapper } from './demo-common';

export default {
  ${demos.join(',\n  ')}
};
`;
  fs.writeFileSync(path.join(dir, '../docs/src/demo-entry.js'), content);
}

// 生成markdown文档的目录
function buildDocsEntry() {
  const output = join('docs/src/docs-entry.js');
  const getName = fullPath => fullPath.replace(/\/(en|zh)/, '.$1').split('/').pop().replace('.md', '');
  const docs = glob
    .sync([       // 匹配对应的md 文件
      join('docs/**/*.md'),
      join('packages/**/*.md'),
      '!**/node_modules/**'
    ])
    .map(fullPath => {
      const name = getName(fullPath);
      // path.relative() 方法根据当前工作目录返回 from 到 to 的相对路径
      return `'${name}': () => import('${path.relative(join('docs/src'), fullPath).replace(/\\/g, '/')}')`;
    });
  const content = `${tips}
export default {
  ${docs.join(',\n  ')}
};
`;
  fs.writeFileSync(output, content);
}

buildEntry();
buildDemoEntry();
buildDocsEntry();
