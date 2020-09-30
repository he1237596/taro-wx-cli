/*
 * @Author: Chris
 * @Date: 2020-09-29 20:02:41
 * @LastEditors: Chris
 * @LastEditTime: 2020-09-30 11:17:56
 * @Descripttion: **
 */
// Node8 就提供了 util.promisify() 这个方法，方便我们快捷的把原来的异步回调方法改成返回 Promise 实例的方法
const { promisify } = require('util');
const ora = require('ora')
// figlet 工具可以将 message 转化为空心的字体
// figlet异步方法，接收2个参数： 1.待转换字符，数字等 2.回调函数
const figlet = promisify(require('figlet'));
// clear 清空终端的屏幕
const clear = require('clear');
const chalk = require('chalk');
const open = require('open');

// const {exec} = require("child_process");

// 输出绿色字体
const log = (str) => {
  console.log(chalk.green(str));
}

// 打印欢迎界面
const printWelcome = async (str)=>{
  clear();
  const welcome = await figlet(str);
  log(welcome);
}

const cloneProject = async (repository, destination, options)=> {
  const download = promisify(require('download-git-repo'));
  const downProcess = ora(`git clone ${repository} .....`);
  downProcess.start();
  await download(repository, destination, options ? options : { clone: false })
  downProcess.succeed();
  // https://github.com/LiuJunb/testweb  public ok
  // await utils.cloneProject('github:LiuJunb/testweb', project)
  
  // need add {clone:true}
  // await utils.cloneProject('direct:https://github.com/LiuJunb/testweb.git', project,{ clone: true })

  // 不能使用ip
  // await utils.cloneProject('gitlab:12.16.120.120:25759/vue-pro-temp', project)
    
  // ok
  // await utils.cloneProject('direct:http://12.16.120.120/25759/vue-pro-temp.git#admin-app', project, { clone: true })

  open('http://www.baidu.com')
  
  // const url = 'http://www.baidu.com';
  // switch (process.platform) {
  //   //mac系统使用 一下命令打开url在浏览器
  //   case "darwin":
  //     exec(`open ${url}`);
  //     break;
  //   //win系统使用 一下命令打开url在浏览器
  //   case "win32":
  //     exec(`start ${url}`);
  //     break;
  //   case 'linux':
  //     cmd = 'xdg-open';
  //     break;
  //   // 默认mac系统
  //   default:
  //     exec(`open ${url}`);
  //     break;
  // }
}

module.exports = {
  log,
  printWelcome,
  cloneProject,
};
