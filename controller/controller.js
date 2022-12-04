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
  static addSong(strPayload) {
    const payload = strPayload.split(',')
    let newData = SongModel.add(payload[0], payload[1], payload[2])
    return newData
  }
  static findById(id) {
    const data = SongModel.readFromJson()
    let findResult = SongModel.findById(data, id)
    if (findResult.status == 200) {
      SongView.displaySongDetail(findResult.data)
    }
  }
}
module.exports = SongController
