/*
 * @Author: Chris
 * @Date: 2020-09-29 21:13:29
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-09 15:01:17
 * @Descripttion: **
 */
const utils = require('./utils');
const initProject =async (projectName, otherArg) => {
  await utils.printWelcome('taro-wx-cli');
  console.log(`🚀新建项目:${projectName}`);
  await utils.cloneProject('direct:https://github.com/he1237596/taro-wx-cli.git', projectName, { clone: true });
  utils.log(`🚀🚀npm install  开始安装依赖...`);
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await utils.terminal(npm, ['install'], {cwd: `./${projectName}`});
  utils.log('🚀🚀npm install  依赖安装完毕...')
  // await utils.cloneProject('github:he1237596/taro-wx-cli', projectName)
}
module.exports = {
  initProject
}