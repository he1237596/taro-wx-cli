/*
 * @Author: Chris
 * @Date: 2020-09-29 21:13:29
 * @LastEditors: Chris
 * @LastEditTime: 2020-10-09 17:09:12
 * @Descripttion: **
 */
const utils = require('./utils');
// const {exec} = require("child_process");
const ora = require('ora');

const initProject =async (projectName, otherArg) => {
  await utils.printWelcome('taro-wx-cli');
  console.log(`🚀新建项目:${projectName}`);

  const pro = ora(`git clone https://github.com/he1237596/my_blog.git .....`)
  pro.start()
  // await utils.cloneProject('direct:https://github.com/he1237596/my_blog.git', projectName, { clone: true });
  pro.succeed('git clone https://github.com/he1237596/my_blog.git');
  const loading = ora();
  utils.log(`
  🚀🚀npm install 正在安装依赖...
  `);
  loading.start();
  // const pro1 = ora(`请稍后...`)
  // pro1.start();
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await utils.terminal(npm, ['install'], {cwd: `./${projectName}`});
  // exec('npm install', (err, stdout, stderr)=>{ // 子进程命令（另一种方法）
  //   console.log(stdout)
  //   console.log(stderr)
  // })
  // await utils.terminal('ping', ['127.0.0.1'], {encoding: 'utf-8'}); // 测试命令
  loading.succeed('依赖安装完毕...')
  // utils.log('🚀🚀npm install  依赖安装完毕')
  // await utils.cloneProject('github:he1237596/taro-wx-cli', projectName)
  await utils.terminal(npm, ['run', 'serve'], {cwd: `./${projectName}`})
}
module.exports = {
  initProject
}