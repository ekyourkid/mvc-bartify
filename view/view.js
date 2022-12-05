const { update } = require('../model/model')

class SongView {
  static displayHelp() {
    const listCommand = [
      '$ node app.js help',
      '$ node app.js list',
      '$ node app.js find <id>',
      '$ node app.js add <songname,band,genre>',
      '$ node app.js update <id> <field,value>',
      '$ node app.js delete <id>',
    ]
    console.log('Bartify')
    listCommand.forEach((command) => {
      console.log(command)
      this.loading(100)
    })
  }
  static display(data) {
    console.log('Songs List')
    data.forEach((song) => {
      this.loading(100)
      console.log(`${song.id}. ${song.title} - ${song.band}\n`)
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
  static displaySongDetail(song) {
    console.log(`/---- Song Detail ----/`)
    console.log(`title: ${song.title}`)
    console.log(`band: ${song.band}`)
    console.log(`genre: ${song.genre}`)
    console.log(`/----------------------/`)
  }
  static songNotFound(query) {
    console.log(`Search for : ${query} not found!!`)
  }
  static displayResult(operation, textString) {
    if (operation == 'add') {
      console.log(`sucess add song`)
      console.log(textString)
    } else if (operation == 'delete') {
      console.log(textString)
    } else if (operation == 'update') {
      console.log('Sucess song update')
    }
  }
}
module.exports = SongView
