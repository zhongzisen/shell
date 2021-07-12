#!/usr/bin/env node

const shell = require('shelljs');

const { COMMIT_TYPES } = require('../constants/index');

if(shell.which('git')) {
  shell.exec('git add .');
  const commitMessage = process.argv.splice(2)[0];
  if(commitMessage) {
    normalizedCommitMessage = commitMessage.replace(/(^[\'\"]|[\'\"]$)/, '')
    const reg = /^[\"\']?\w+(?=:)/;
    commitType = normalizedCommitMessage.match(reg)[0];
    if(COMMIT_TYPES.includes(commitType)) {
      shell.exec(`git commit -m '${normalizedCommitMessage}'`);
      if(shell.exec('git push').code !== 0){
        const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD').stdout
        shell.exec(`git push --set-upstream origin ${currentBranch}`);
      }
      shell.echo('push success');
    }else{
      shell.echo('请规范commit记录');  
    }
    
  }else {
    shell.echo('请输入commit记录');
  }
  
} else{
  shell.echo('不支持git');
}