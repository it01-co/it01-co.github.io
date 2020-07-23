const fs = require('fs');
const path = require('path');

const EXCLUDES = [
  'index.js',
  'index.less',
  'style',
  'mixins',
  'utils',
  '.DS_Store'
];

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages')); // 同步读取目录
  return dirs.filter(dirName => !EXCLUDES.includes(dirName)); // 筛选出除了EXCLUDES 之外的所有文件
};
