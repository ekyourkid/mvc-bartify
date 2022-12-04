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
    console.log('Bartify')
    listCommand.forEach((command) => {
      console.log(command)
      this.loading(100)
    })
  }
  static display(data) {
    data.forEach((song) => {
      console.log('Songs List')
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
}
module.exports = SongView
