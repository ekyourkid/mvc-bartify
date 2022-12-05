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
    SongView.displayResult(`add`, strPayload)
    return newData
  }
  static findById(id) {
    const data = SongModel.readFromJson()
    let findResult = SongModel.findById(data, id)
    if (findResult.status == 200) {
      SongView.displaySongDetail(findResult.data)
    }
  }
  static getDeleteSong(id) {
    const data = SongModel.readFromJson()
    let songById = SongModel.findById(data, id)
    if (songById.status == 200) {
      let newList = SongModel.delete(data, id)
      SongView.display(newList)
      console.log(songById)
      SongView.displayResult('delete', `${songById.data.title} sucess deleted`)
    } else {
      SongView.songNotFound(id)
    }
  }
  static updateSong(id, strPayload) {
    let payload = strPayload.split(',')
    let field = payload[0]
    let value = payload[1]

    const data = SongModel.readFromJson()
    let songById = SongModel.findById(data, id)

    if (songById.status == 200) {
      SongModel.updateSong(id, data, songById.data, { field, value })
    } else {
      SongView.songNotFound(id)
    }
  }
}
module.exports = SongController
