#!/usr/bin/env node
/*
 * @Author: Chris
 * @Date: 2020-09-27 21:23:48
 * @LastEditors: Chris
 * @LastEditTime: 2020-09-29 21:20:17
 * @Descripttion: **
 */
console.log('taro-wx-cli')
const utils = require('./lib/utils');
const create = require('./lib/create');
const program = require('commander');

utils.printWelcome('welcome');
// program.version(require('./package.json').version); // 默认 taro-wx-cli -V （）大写输出版本号
program.version(require('./package.json').version, '-v --version'); // 修改为 taro-wx-cli -v （小写）输出版本号, -V（大写）无效
/* 
taro-wx-cli -h 默认：
Options:
  -v --version  output the version number
  -h, --help    display help for command
*/

program.option('-i, --integer <n>', 'An integer argument'); // 添加options提示

program.command('create <project> [otherArg...]')
.description('clone a repository into a newly created project or directory')
.action((project, otherArg)=>{
  // 参数对应命令后面的参数
  // taro-wx-cli create mytaro a b 输出：taro-wx-cli mytaro a b
  // console.log('taro-wx-cli', project, otherArg.join(' '));
  create.initProject(project);

})

// 添加其他提示
program.on('--help', function(){
  console.log('')
  console.log('Other:');
  console.log('  $ taro-wx-cli --help');
  console.log('  $ taro-wx-cli -h');
  console.log('  $ taro-wx-cli -v');
  console.log('  $ taro-wx-cli --version');
  console.log('  $ taro-wx-cli -i 1');
  console.log('  $ taro-wx-cli --interger 1');
  console.log('  $ taro-wx-cli create myVue');
});

program.parse(process.argv);