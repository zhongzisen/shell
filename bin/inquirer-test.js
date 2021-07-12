const inquirer = require('inquirer');
(async () => {
  const userInfo = await inquirer.prompt([{
    type: 'input',
    name: 'account',
    message: '请输入账号',
    default: ''
  },{
    type: 'input',
    name: 'phone',
    message: '请输入手机号',
    prefix: '前缀',
    validate: (value) => {
      if(/^\d{11}$/.test(value)) {
        return true;
      }
      return '请输入十一位的号码';
    }
  },{
    type: 'password',
    name: 'password',
    message: '请输入密码',
    default: '123456',
    filter: (value) => {
      return value.toLowerCase();
    },
    when: ({ account }) => {
      return account.length < 10;
    }
  },{
    type: 'expand',
    name: 'isLoading',
    message: '是否贷款？',
    choices: [
      {
        key: "a",
        name: "Apple",
        value: "apple"
    },
    {
        key: "O",
        name: "Orange",
        value: "orange"
    },
    {
        key: "p",
        name: "Pear",
        value: "pear"
    }
    ]
  }]);
  
  console.log(userInfo);
})();