/*
 * @Author: Chris
 * @Date: 2020-09-29 21:13:29
 * @LastEditors: Chris
 * @LastEditTime: 2020-09-30 10:37:28
 * @Descripttion: **
 */
const utils = require('./utils');
const initProject =async (projectName, otherArg) => {
  await utils.printWelcome('my cli')
  console.log(`🚀新建项目:${projectName}`)
  await utils.cloneProject('direct:https://github.com/he1237596/taro-wx-cli.git', projectName, { clone: true })
  // await utils.cloneProject('github:he1237596/taro-wx-cli', projectName)
}
module.exports = {
  initProject
}