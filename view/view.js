const clear = require('clear')
const figlet = require('figlet')
const chalk = require('chalk')

class SongView {
  static displayHelp() {
    const listCommand = [
      '$ node app.js help',
      '$ node app.js list',
      '$ node app.js findById <id>',
      '$ node app.js add <songname,band,genre>',
      '$ node app.js update <id> <field,value>',
      '$ node app.js delete <id>',
    ]
    console.log(chalk.cyan(figlet.textSync('Welcome to bartify')))
    listCommand.forEach((command) => {
      console.log(command)
      this.loading(100)
    })
  }
  static display(data) {
    data.forEach((song) => {
      this.loading(100)
      console.log(chalk.cyan(figlet.textSync('Songs List')))
      console.log(
        chalk.cyan('---------------------------------------------------'),
      )
      console.log(chalk.blue(`${song.id}. ${song.title} - ${song.band}\n`))
    })
  }

  static loading(milliseconds) {
    var start = new Date().getTime()
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break
      }
    }
  }
}
module.exports = SongView
