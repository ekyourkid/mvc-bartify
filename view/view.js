const SongModel = require('../model/model')
class SongView {
  static display(data) {
    data.forEach((song) => {
      console.log(`${song.id}. ${song.title} - ${song.band}`)
    })
  }
}
module.exports = SongView
