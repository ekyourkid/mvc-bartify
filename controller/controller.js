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
  static getAddSong() {
    let create = SongModel.addSong()
    SongView.addList(create)
  }
}
module.exports = SongController
