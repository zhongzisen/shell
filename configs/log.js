const chalk = require('chalk');
const log = console.log;

module.exports = {
    warn: (value) => {
        log(chalk.yellow(value));
    },
    error: (value) => {
        log(chalk.red(value));
    },
    info: (value) => {
        log(chalk.blue(value));
    },
}