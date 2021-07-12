const { Command } = require('commander');
const program = new Command();
program
  .version('0.0.1')
  .usage("<command> [options]11111111111");

program
  .command('config')
  .description('sadasd')
  .option('-c, --com [item2]', '你猜')
  .action((aaaa) => {
    console.log(aaaa, '------------------');
  })

program.parse(process.argv);