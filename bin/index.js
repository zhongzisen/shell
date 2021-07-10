const shell = require('shelljs');
const log = require('../configs/log');

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
      log.info('推送成功');
    }else{
      log.warn('请规范commit记录');  
    } 
  }else {
    log.warn('请输入commit记录');
  }  
}else {
  log.error('不支持git');
}
