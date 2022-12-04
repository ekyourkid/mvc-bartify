const SongModel = require('../model/model')
const SongView = require('../view/view')

class SongController {
  static help() {
    SongView.displayHelp()
  }
  static getSongList() {
    let data = SongModel.readFromJson()
    SongView.display(data)
  }
}
module.exports = SongController
